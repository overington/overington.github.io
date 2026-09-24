+++
title = "Test page to see example"
description = "This is a test page to see how the example works."
+++

<section id="colour-playground" aria-labelledby="colour-playground-title">
  <header>
    <h2 id="colour-playground-title">Pico colour playground</h2>
    <p>
      Edit a value to apply it immediately to this page. Switch schemes to
      preview and edit the light and dark values independently.
    </p>
  </header>

  <div class="colour-playground__toolbar">
    <div role="group" aria-label="Preview colour scheme">
      <button type="button" class="secondary outline" data-colour-scheme="light">
        Light
      </button>
      <button type="button" class="secondary outline" data-colour-scheme="dark">
        Dark
      </button>
    </div>

    <p class="colour-playground__hint">
      The controls override variables on this page only; they do not save changes
      until you copy the generated SCSS.
    </p>
  </div>

  <div
    id="colour-playground-controls"
    class="colour-playground__controls"
    aria-live="polite"
  ></div>

  <label for="colour-playground-scss">
    SCSS for <code>sass/_colours.scss</code>
  </label>
  <textarea
    id="colour-playground-scss"
    rows="28"
    readonly
    spellcheck="false"
  ></textarea>

  <div class="colour-playground__copy-row">
    <button id="colour-playground-copy" type="button">
      Copy SCSS
    </button>
    <output id="colour-playground-copy-status" aria-live="polite"></output>
  </div>
</section>

<script src="/js/colour-playground.js" defer></script>

## Preview

Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet
suscipit sapien. Nulla iaculis eros a elit pharetra egestas.

<div class="grid">

Subscribe

</div>

I agree to the
<a href="#" onclick="event.preventDefault()">Privacy Policy</a>

</div>

<div id="typography" class="section">

## Typography

Aliquam lobortis vitae nibh nec rhoncus. Morbi mattis neque eget
efficitur feugiat. Vivamus porta nunc a erat mattis, mattis feugiat
turpis pretium. Quisque sed tristique felis.

> "Maecenas vehicula metus tellus, vitae congue turpis hendrerit non.
> Nam at dui sit amet ipsum cursus ornare."
>
> \- Phasellus eget lacinia

### Lists

- Aliquam lobortis lacus eu libero ornare facilisis.
- Nam et magna at libero scelerisque egestas.
- Suspendisse id nisl ut leo finibus vehicula quis eu ex.
- Proin ultricies turpis et volutpat vehicula.

### Inline text elements

<div class="grid">
    <a href="#" onclick="event.preventDefault()">Primary link</a>
    <a href="#" class="secondary" onclick="event.preventDefault()">Secondary
    link</a>
    <a href="#" class="contrast" onclick="event.preventDefault()">Contrast
    link</a>
</div>

<div class="grid">
    **Bold**
    *Italic*
    <u>Underline</u>
</div>
<div class="grid">
    <span><del>Deleted</del></span>
    <u>Inserted</u>
    <span><s>Strikethrough</s></span>
</div>
<div class="grid">
    <span><small>Small</small></span>
    <span>Text <sub>Sub</sub></span>
    <span>Text <sup>Sup</sup></span>
</div>
<div class="grid">
    <span><abbr class="abbr" title="Abbreviation" data-tooltip="Abbreviation">Abbr.</abbr></span>
    <span><kbd>Kbd</kbd></span>
    <span ><mark>Highlighted</mark></span>
</div>

### Heading 3

Integer bibendum malesuada libero vel eleifend. Fusce iaculis turpis
ipsum, at efficitur sem scelerisque vel. Aliquam auctor diam ut purus
cursus fringilla. Class aptent taciti sociosqu ad litora torquent per
conubia nostra, per inceptos himenaeos.

#### Heading 4

Cras fermentum velit vitae auctor aliquet. Nunc non congue urna, at
blandit nibh. Donec ac fermentum felis. Vivamus tincidunt arcu ut lacus
hendrerit, eget mattis dui finibus.

##### Heading 5

Donec nec egestas nulla. Sed varius placerat felis eu suscipit. Mauris
maximus ante in consequat luctus. Morbi euismod sagittis efficitur.
Aenean non eros orci. Vivamus ut diam sem.

###### Heading 6

Ut sed quam non mauris placerat consequat vitae id risus. Vestibulum
tincidunt nulla ut tortor posuere, vitae malesuada tortor molestie. Sed
nec interdum dolor. Vestibulum id auctor nisi, a efficitur sem. Aliquam
sollicitudin efficitur turpis, sollicitudin hendrerit ligula semper id.
Nunc risus felis, egestas eu tristique eget, convallis in velit.

<figure>
<img src="img/aleksandar-jason-a562ZEFKW8I-unsplash-2000x1000.jpg"
alt="Minimal landscape" />
<figcaption>Image from <a href="https://unsplash.com/photos/a562ZEFKW8I"
target="_blank">unsplash.com</a></figcaption>
</figure>

</div>

<div id="buttons" class="section">

## Buttons

Primary Secondary Contrast

Primary outline Secondary outline Contrast outline

</div>

<div id="form" class="section">

## Form elements

Search Text <span class="small">Curabitur consequat lacus at lacus porta
finibus.</span> Select Select… … File browser Range slider

<div class="grid">

Valid Invalid Disabled

</div>

<div class="grid">

Date Time Color

</div>

<div class="grid">

**Checkboxes**

Checkbox

Checkbox

**Radio buttons** Radio button Radio button

**Switches**

Switch

Switch

</div>

</div>

<div id="tables" class="section">

## Tables

<div class="overflow-auto">

| \#  | Heading | Heading | Heading | Heading | Heading | Heading | Heading |
|-----|---------|---------|---------|---------|---------|---------|---------|
| 1   | Cell    | Cell    | Cell    | Cell    | Cell    | Cell    | Cell    |
| 2   | Cell    | Cell    | Cell    | Cell    | Cell    | Cell    | Cell    |
| 3   | Cell    | Cell    | Cell    | Cell    | Cell    | Cell    | Cell    |

</div>

</div>

<div id="modal" class="section">

## Modal

Launch demo modal

</div>

<div id="accordions" class="section">

## Accordions

Accordion 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
urna diam, tincidunt nec porta sed, auctor id velit. Etiam venenatis
nisl ut orci consequat, vitae tempus quam commodo. Nulla non mauris
ipsum. Aliquam eu posuere orci. Nulla convallis lectus rutrum quam
hendrerit, in facilisis elit sollicitudin. Mauris pulvinar pulvinar mi,
dictum tristique elit auctor quis. Maecenas ac ipsum ultrices, porta
turpis sit amet, congue turpis.

Accordion 2

- Vestibulum id elit quis massa interdum sodales.
- Nunc quis eros vel odio pretium tincidunt nec quis neque.
- Quisque sed eros non eros ornare elementum.
- Cras sed libero aliquet, porta dolor quis, dapibus ipsum.

</div>

## Article

Nullam dui arcu, malesuada et sodales eu, efficitur vitae dolor. Sed
ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit
sapien. Nulla iaculis eros a elit pharetra egestas. Nunc placerat
facilisis cursus. Sed vestibulum metus eget dolor pharetra rutrum.

<span class="small">Duis nec elit placerat, suscipit nibh quis, finibus
neque.</span>

<div id="group" class="section">

## Group

</div>

<div id="progress" class="section">

## Progress bar

</div>

<div id="loading" class="section">

## Loading

Please wait…
