# Notes on Zola:

The blog is written using [Zola](https://www.getzola.org/), a static site generator in Rust.

- `content/` contains the markdown files for the blog posts, pages, and sections.
- `static/` contains the static files like images, CSS, and JavaScript.
- `templates/` contains the HTML templates for the site.
- `config.toml` contains the configuration for the site, including the title, description, and other settings.

Zola content:
- a `page` is either a markdown file in `content/` or a directory with an `index.md` file in `content/`. A page can have a `template` defined in its front matter, which specifies which template to use when rendering the page.
- a `section` is a directory in `content/` that contains an `_index.md` file. A section can have a `template` defined in its front matter, which specifies which template to use when rendering the section. A section can also have a `description` defined in its front matter, which is used in the template to display a description of the section.

## Commands
- `zola serve` to start the server
- `zola build` to build the static files in `public/`
- `zola check` to check for errors in the content


# Task List:

- [ ] Homepage
    - [ ] Write content copy for homepage
- [ ] about page
    - [ ] write copy for about page
- [ ] Gallery shortcode
    - [ ] modal close button
    - [ ] modal width height set to image width height


## Content Copy notes

The homepage and about page might be similar in what I am trying to add content about. The about page should go into more details. The homepage should be something like a headline, and something pretty to look at.

