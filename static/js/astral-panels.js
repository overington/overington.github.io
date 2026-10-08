/*
 * Hash-driven navigation for the section-astral template.
 *
 * The template remains fully readable without JavaScript: this script only
 * progressively enhances it by presenting one panel at a time.
 */
(() => {
  const panelSelector = "[data-astral-panel]";
  const navSelector = "a[data-astral-nav]";

  const panelForHash = (panels, hash) => {
    if (!hash || !hash.startsWith("#")) {
      return null;
    }

    const id = decodeURIComponent(hash.slice(1));
    return Array.from(panels).find((panel) => panel.id === id) ?? null;
  };

  const initialise = (astral) => {
    const panels = astral.querySelectorAll(panelSelector);
    const links = astral.querySelectorAll(navSelector);

    if (!panels.length || !links.length) {
      return;
    }

    const activate = ({ focus = false } = {}) => {
      const activePanel = panelForHash(panels, window.location.hash) ?? panels[0];
      const activeId = activePanel.id;

      panels.forEach((panel) => {
        panel.hidden = panel !== activePanel;
      });

      links.forEach((link) => {
        const isActive = link.hash === `#${activeId}`;
        link.toggleAttribute("aria-current", isActive);
      });

      if (focus) {
        activePanel.focus({ preventScroll: true });
        activePanel.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      }
    };

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = panelForHash(panels, link.hash);

        if (!target) {
          return;
        }

        event.preventDefault();

        if (window.location.hash === link.hash) {
          activate({ focus: true });
        } else {
          window.location.hash = link.hash;
        }
      });
    });

    window.addEventListener("hashchange", () => activate({ focus: true }));

    astral.classList.add("astral--enhanced");
    activate();
  };

  document.querySelectorAll("[data-astral]").forEach(initialise);
})();
