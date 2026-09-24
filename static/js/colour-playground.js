(() => {
  "use strict";

  const widget = document.getElementById("colour-playground");

  // This script is loaded only for the test page, but avoid errors if it is
  // accidentally included elsewhere.
  if (!widget) {
    return;
  }

  const root = document.documentElement;
  const controls = document.getElementById("colour-playground-controls");
  const scssOutput = document.getElementById("colour-playground-scss");
  const copyButton = document.getElementById("colour-playground-copy");
  const copyStatus = document.getElementById("colour-playground-copy-status");
  const schemeButtons = widget.querySelectorAll("[data-colour-scheme]");

  /*
    * Optional page-level configuration.
    *
    * This is read from `window.colourPlaygroundConfig`, which can be declared
    * in test.md before this JavaScript file is loaded.
    */
   const config = window.colourPlaygroundConfig ?? {};

   /*
    * These are the Pico variables managed by this playground.
    *
    * Configuration keys are also included, so you can add another Pico colour
    * variable in the page configuration without changing this list first.
    */
   const variables = [
     ...new Set([
       "--pico-text-selection-color",
       "--pico-primary",
       "--pico-primary-background",
       "--pico-primary-underline",
       "--pico-primary-hover",
       "--pico-primary-hover-background",
       "--pico-primary-focus",
       "--pico-primary-inverse",
       "--header-colour-start",
       "--header-colour-end",
       ...Object.keys(config.light ?? {}),
       ...Object.keys(config.dark ?? {}),
     ]),
   ];

   function readSchemeValues(theme) {
     const previousTheme = root.getAttribute("data-theme");

     // Force the relevant `_colours.scss` selector to apply, then retain the
     // computed values as they existed when the page loaded.
     root.dataset.theme = theme;

     const computedStyles = window.getComputedStyle(root);
     const values = {};

     for (const variable of variables) {
       values[variable] = computedStyles.getPropertyValue(variable).trim();
     }

     if (previousTheme === null) {
       root.removeAttribute("data-theme");
     } else {
       root.dataset.theme = previousTheme;
     }

     return values;
   }

   function freezeSchemes(values) {
     return Object.freeze({
       light: Object.freeze({ ...values.light }),
       dark: Object.freeze({ ...values.dark }),
     });
   }

   /*
    * Immutable source values captured from the stylesheet at page load.
    *
    * Always use this when you need the unedited values:
    *     ORIGINAL_SCHEMES.light["--pico-primary"]
    *     ORIGINAL_SCHEMES.dark["--pico-primary"]
    */
   const ORIGINAL_SCHEMES = freezeSchemes({
     light: readSchemeValues("light"),
     dark: readSchemeValues("dark"),
   });

   /*
    * Mutable editor state.
    *
    * Original stylesheet values are the defaults. Page configuration, if
    * present, is layered on top. `updateVariable()` changes this object only.
    */
   const schemes = {
     light: {
       ...ORIGINAL_SCHEMES.light,
       ...(config.light ?? {}),
     },
     dark: {
       ...ORIGINAL_SCHEMES.dark,
       ...(config.dark ?? {}),
     },
   };

  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  let activeScheme =
    root.dataset.theme === "dark" ||
    (!root.dataset.theme && systemPrefersDark)
      ? "dark"
      : "light";

  function displayName(variable) {
    return variable
      .replace("--pico-", "")
      .replaceAll("-", " ");
  }

  // <input type="color"> requires a six-digit hexadecimal colour.
  function normaliseHex(value) {
    const shortHex = /^#([0-9a-f]{3})$/i.exec(value);

    if (shortHex) {
      return `#${shortHex[1]
        .split("")
        .map((character) => character + character)
        .join("")}`;
    }

    return /^#[0-9a-f]{6}$/i.test(value) ? value : null;
  }

  function applyActiveScheme() {
    root.dataset.theme = activeScheme;

    for (const [variable, value] of Object.entries(schemes[activeScheme])) {
      root.style.setProperty(variable, value);
    }
  }

  function generateScss() {
    const declarations = (values) =>
      Object.entries(values)
        .map(([variable, value]) => `  ${variable}: ${value};`)
        .join("\n");

    return `/* Orange colour for the light colour scheme (default). */
/* Can be forced with data-theme="light". */
[data-theme="light"],
:root:not([data-theme="dark"]),
:host:not([data-theme="dark"]) {
${declarations(schemes.light)}
}

/* Orange colour for the dark colour scheme (automatic). */
/* Enabled when the operating system prefers dark mode. */
@media only screen and (prefers-color-scheme: dark) {
  :root:not([data-theme]),
  :host:not([data-theme]) {
${declarations(schemes.dark)}
  }
}

/* Orange colour for the forced dark colour scheme. */
/* Enabled with data-theme="dark". */
[data-theme="dark"] {
${declarations(schemes.dark)}
}
`;
  }

  function updateScssOutput() {
    scssOutput.value = generateScss();
  }

  function updateVariable(variable, value) {
    schemes[activeScheme][variable] = value.trim();

    // Inline custom properties take precedence over the compiled stylesheet,
    // which gives an immediate preview without rebuilding Zola.
    root.style.setProperty(variable, value.trim());

    updateScssOutput();
  }

  function createControl(variable, value) {
    const row = document.createElement("div");
    row.className = "colour-playground__control";

    const label = document.createElement("label");
    label.htmlFor = `colour-value-${variable.replaceAll("--", "").replaceAll("-", "_")}`;

    const labelText = document.createElement("span");
    labelText.textContent = displayName(variable);

    const variableName = document.createElement("code");
    variableName.textContent = variable;

    label.append(labelText, variableName);

    const inputs = document.createElement("div");
    inputs.className = "colour-playground__inputs";

    const swatch = document.createElement("span");
    swatch.className = "colour-playground__swatch";
    swatch.title = `Preview of ${variable}`;
    swatch.style.setProperty("--colour-playground-value", `var(${variable})`);

    const textInput = document.createElement("input");
    textInput.id = label.htmlFor;
    textInput.type = "text";
    textInput.value = value;
    textInput.autocomplete = "off";
    textInput.spellcheck = false;
    textInput.setAttribute("aria-label", `${variable} CSS colour value`);

    const hexValue = normaliseHex(value);

    // RGB/RGBA values retain a text control because a colour picker cannot
    // represent alpha. Plain hexadecimal values get both controls.
    if (hexValue) {
      const picker = document.createElement("input");
      picker.type = "color";
      picker.value = hexValue;
      picker.setAttribute("aria-label", `Choose ${variable}`);

      picker.addEventListener("input", () => {
        textInput.value = picker.value;
        updateVariable(variable, picker.value);
      });

      textInput.addEventListener("input", () => {
        const normalisedValue = normaliseHex(textInput.value.trim());

        if (normalisedValue) {
          picker.value = normalisedValue;
        }

        updateVariable(variable, textInput.value);
      });

      inputs.append(swatch, picker, textInput);
    } else {
      textInput.addEventListener("input", () => {
        updateVariable(variable, textInput.value);
      });

      inputs.append(swatch, textInput);
    }

    row.append(label, inputs);

    return row;
  }

  function renderControls() {
    controls.replaceChildren();

    for (const [variable, value] of Object.entries(schemes[activeScheme])) {
      controls.append(createControl(variable, value));
    }
  }

  function setScheme(scheme) {
    activeScheme = scheme;
    applyActiveScheme();
    renderControls();
    updateScssOutput();

    for (const button of schemeButtons) {
      const isActive = button.dataset.colourScheme === activeScheme;
      button.setAttribute("aria-pressed", String(isActive));
    }
  }

  async function copyScss() {
    try {
      await navigator.clipboard.writeText(scssOutput.value);
      copyStatus.textContent = "Copied.";
    } catch {
      // Clipboard access can be unavailable outside HTTPS or localhost.
      scssOutput.focus();
      scssOutput.select();

      const copied = document.execCommand("copy");
      copyStatus.textContent = copied
        ? "Copied."
        : "Copy failed — select the SCSS and copy it manually.";
    }
  }

  for (const button of schemeButtons) {
    button.addEventListener("click", () => {
      setScheme(button.dataset.colourScheme);
    });
  }

  copyButton.addEventListener("click", copyScss);

  setScheme(activeScheme);
})();
