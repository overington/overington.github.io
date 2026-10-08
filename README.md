# Samuel Overington — website

This repository contains the content and site-specific assets for [samueloverington.com](https://samueloverington.com), built with [Zola](https://www.getzola.org/). The Zola theme is maintained in a separate Git repository and included here as a Git submodule.

## Repository layout

- `config.toml` — Zola site configuration and navigation.
- `content/` — pages, blog posts, and projects, written in Markdown with Zola front matter.
- `themes/picolo/` — the [Picolo Zola theme](https://github.com/overington/picolo-theme-zola), checked out as a Git submodule.
- `sass/` — site Sass files, compiled by Zola.
- `static/` — files copied directly into the generated site, such as fonts and JavaScript.
- `media/` — media referenced by site content.
- `Makefile` — shortcuts for checking, building, and deploying the site.

## Requirements

Install the following on your development machine:

- [Zola](https://www.getzola.org/documentation/getting-started/installation/)
- Git
- GNU Make (usually available as `make` on macOS and Linux)
- For deployment: SSH access to the hosting account and `rsync`

## Get started

Clone the content repository and initialize the theme submodule:

```sh
git clone --recurse-submodules <content-repository-url>
cd zola-site-content
```

If you already cloned without submodules, initialize them with:

```sh
make theme
```

Check the site and build it locally:

```sh
make check
make build
```

The generated website is written to `public/`. To preview changes while editing, run:

```sh
zola serve
```

Zola serves the local preview at `http://127.0.0.1:1111` by default.

## Astral-style section

`templates/section-astral.html` provides an Astral-inspired section layout using PicoCSS. It renders every child page in a section as a panel and supplies an in-page navigation link for it. `static/js/astral-panels.js` progressively enhances the layout: it shows the selected hash panel, marks its navigation item active, and supports direct links plus browser back/forward. Without JavaScript, every panel remains visible and usable. Use it from the section index:

```toml
+++
title = "Home"
description = "Short description"
template = "section-astral.html"
sort_by = "weight"
+++
```

Configure each child page with Zola's `[extra]` table. Arbitrary front-matter values must be placed in this table; values such as `style` at the top level are not page metadata exposed to the template.

```toml
+++
title = "Home"
weight = 10

[extra]
style = "card"
icon = "/images/icon-home.svg"
heading_text = "Samuel Overington"
sub_heading = "Senior Machine Learning Engineer"
image = "/images/me.png"
image_alt = "Samuel Overington"
+++

A short introduction written in Markdown.
```

Supported `style` values are:

- `card` — a responsive text-and-image introduction panel.
- `gallery` — Markdown content plus a responsive gallery. Set `gallery` to an array of image paths and optionally `gallery_alt`.
- `content` — a regular Markdown panel; this is the default.
- `external` — adds a navigation item that opens `url` in a new tab, without rendering a panel.

For example, a gallery page can use `[extra]` values `style = "gallery"`, `heading_text = "Work"`, and `gallery = ["/images/work-1.png", "/images/work-2.png"]`. An external page uses `style = "external"` and `url = "https://example.com"`. `content` may also be set in `[extra]` for a short preamble, but Markdown below the front matter is the preferred content field. Place local images under `static/` and use their root-relative public paths (for example, `static/images/me.png` becomes `/images/me.png`).

## Publishing from a local machine

Publishing uses SSH and `rsync`; it does not push the generated site to GitHub. First, confirm the correct document root for the domain in cPanel. The domain's root may be `public_html`, but use the directory actually configured for the domain.

Preview the deployment before changing the server:

```sh
make deploy-preview \
  DEPLOY_HOST=CPANEL_USER@SERVER \
  DEPLOY_PATH=/home/CPANEL_USER/public_html
```

Review the output, especially any files that would be deleted. If the destination is correct, deploy with:

```sh
make deploy \
  DEPLOY_HOST=CPANEL_USER@SERVER \
  DEPLOY_PATH=/home/CPANEL_USER/public_html
```

The SSH port defaults to `22`. To use another port, pass `SSH_PORT`, for example:

```sh
make deploy-preview \
  DEPLOY_HOST=CPANEL_USER@SERVER \
  DEPLOY_PATH=/home/CPANEL_USER/public_html \
  SSH_PORT=2222
```

**Deployment warning:** `make deploy` runs `rsync --delete`, which removes files from the destination if they are not present in the generated `public/` directory. Only deploy to a directory dedicated to this site, and preserve any hosting files that must remain there. The preview target is a dry run and does not upload or delete files.

## Before publishing

Set `base_url` in `config.toml` to the site's canonical production URL. It currently uses `https://example.com`; update it to `https://samueloverington.com` (or the canonical `www` URL, if preferred) before building for production. Zola uses this value when generating URLs.

## Theme updates

The content repository records the theme submodule at a specific commit. This keeps builds reproducible. To update the theme, check out the desired commit in `themes/picolo`, then commit the updated submodule reference in this repository:

```sh
cd themes/picolo
git fetch origin
git checkout <theme-commit-or-tag>
cd ../..
git add themes/picolo
git commit -m "Update Picolo theme"
```

## Future automation

The current publishing workflow is intended to run from a local development machine. It can later be moved to GitHub Actions by checking out this repository with submodules enabled, installing a pinned Zola version, running the same checks and build, and deploying `public/` over SSH with `rsync`. Keep deployment credentials in GitHub Actions secrets rather than in this repository.
