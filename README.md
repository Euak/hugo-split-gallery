# Hugo Split Gallery | [Demo](https://tmuguet.gitlab.io/hugo-split-gallery/)

Split Gallery is a theme for [Hugo](http://gohugo.io/) focused on photos and maps.  
This Hugo theme features a photo gallery, a map and custom content per page, and supports custom sections and taxonomies.

This project is licensed under the [GPLv3 license](/LICENSE). Due to 3rd-party included in this project, you are *not* free to use it for commercial applications. See the license section below for more info.

It is inspired by [Hugo Split Theme](https://github.com/christianmendoza/hugo-split-theme), itself ported from [Split](https://onepagelove.com/split) by [One Page Love](https://onepagelove.com).

![screenshot](/images/screenshot.png)

[Demo](https://tmuguet.gitlab.io/hugo-split-gallery/) (built with [exampleSite](https://gitlab.com/tmuguet/hugo-split-gallery/-/tree/main/exampleSite) as source); [Live example](https://thomasmuguet.info/).

This project follows [semantic versioning](https://semver.org/), meaning any new minor version (e.g. 1.1.0 -> 1.2.0) only introduces new features without breaking changes, and breaking changes are only introduced in major versions (e.g. 1.1.0 -> 2.0.0).
This means you can safely upgrade from one minor version to the next one.

## Installation

Inside the folder of your Hugo site, run the following command:

```bash
git submodule add https://gitlab.com/tmuguet/hugo-split-gallery.git themes/hugo-split-gallery
```

Then, change (or add) the theme in the site's configuration (e.g. _config.toml_):

```toml
theme = "hugo-split-gallery"
```

For more information, read the official [setup guide](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme) of Hugo.

## Getting started

After installing the theme successfully, you just need to add some content.

### Content archetype

*This theme supports any type of section (`post`, `blog`, ...). For simplicity, we'll use the term `post` in this part.*

This theme requires each post to follow this structure:

```text
content/
├── posts
│   ├── my-post
│   │   ├── index.md
│   │   ├── mytrack.gpx
│   │   └── images
│   │       ├── IMGP.jpg
│   │       └── ..
│   ├── my-other-post
│   │   ├── index.md
│   │   ├── mytrack.gpx
│   │   ├── mysecondtrack.gpx
│   │   └── images
│   │       ├── IMGP.jpg
│   │       └── ..
```

In other words, photos displayed in the gallery **must** be in a `images` subfolder, and GPX track(s) -if any- must be at the same level as the content.

Additionnally, the content of the post:

* **requires** an `images` parameter, refering to at least one picture from this post, which will be used as thumbnail in the home gallery,
* can have a `seealso` parameter, refering to one or multiple other posts.

Example:

```text
---
title: "Lac de la Muzelle et lac Lauvitel"
date: 2017-07-30T00:00:00+00:00
images: ["images/IMGP3719.jpg"]
seealso: ["posts/lac-lauvitel", "posts/lac-muzelle"]    # If single, can avoid the brackets
---

Cat ipsum dolor sit amet, hide from vacuum cleaner swat turds around the house hate dog don't nosh on the birds.
```

## Tweaking your site

In order to work, this theme does not require anything specific from the configuration of your site.

This theme supports all configuration options specified in [Hugo documentation](https://gohugo.io/getting-started/configuration/). If you have issues with an option, please let me know via the [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues) or by [email](mailto:hi@tmuguet.me).

Some additionnal parameters are available to tweak your site, described below.

### Taxonomies

Hugo Split Gallery supports custom taxonomies (as long as they don't have space in their name and values).

Example:

```toml
[taxonomies]
  massif = "massifs"
  saison = "saisons"
  type = "types"
```

You can configure the icons using [FontAwesome 4.7](https://fontawesome.com/v4.7/icons/) icons:

```toml
  [params.taxonomies]
    [params.taxonomies.massifs]
      icon = "location-arrow"
    [params.taxonomies.saisons]
      icon = "calendar"
    [params.taxonomies.types]
      icon = "paw"
```

### Footnotes

You can define footnotes per-page and globally to the site. These footnotes differ from [Markdown footnotes](https://michelf.ca/projects/php-markdown/extra/#footnotes), as they are displayed at the bottom of the page (Markdown footnotes are displayed at the bottom of the article).

Use `footnote` parameter in your post to define a specific footnote for that page:

```text
---
title: "Lac de la Muzelle et lac Lauvitel"
date: 2017-07-30T00:00:00+00:00
images: ["images/IMGP3719.jpg"]
footnote: "Foo bar"
---

Cat ipsum dolor sit amet, hide from vacuum cleaner swat turds around the house hate dog don't nosh on the birds.
```

Use the `footnote` parameter in your site configuration to apply it to all your website (you can include HTML):

```toml
[params]
  footnote = """
  <ul class='list-inline'>
    <li class='list-inline-item me-4'><a href='/about/'><i class='fa fa-info-circle fa-fw'></i> À propos</a></li>
    <li class='list-inline-item me-4'><a href='https://tmuguet.me/'><i class='fa fa-address-card fa-fw'></i> Site pro.</a></li>
    <li class='list-inline-item me-4'><a href='https://map2gpx.fr/'><i class='fa fa-map fa-fw'></i> map2gpx</a></li>
  </ul>"""
```

If both are provided, both are displayed.

### Images

By default, this theme processes all images to:

* Generate a thumbnail (non-configurable)
* Generate a large-res image of width 2000px
* Include the original image as high-res

You can change the size of the large-res image via the `largeImageSize` parameter of your site's configuration (see [hugo documentatiopn](https://gohugo.io/content-management/image-processing/#resize) for valid values).

Example:

```toml
[params]
  largeImageSize = "4000x"
```

You can disable the inclusion of the original high-res images via setting `includeOriginalImage` to `false` in the site's configuration. This helps saving disk space and makes the build much faster. In such case, you should also set [`publishResources`](https://gohugo.io/content-management/build-options/#publishresources) to `false` in your posts.

Example of site configuration:

```toml
[params]
  includeOriginalImage = false
```

Example of posts configuration (at the root of `posts`):

```text
---
title: "My hikes"
cascade:
    _build:
        publishResources: false
---

```

### Download

By default, a link _Download all photos_ is displayed for all posts. this can be disabled via setting the `enableDownloadAll` site's parameter to `false`. See also the `galleryButtons` parameter to enable or disable download of photos within the gallery.

### Gallery

Some options are configurable in the site's configuration.They are based on [fancybox's options](https://fancyapps.com/fancybox/3/docs/#options):

* `galleryLoop`: Enable infinite gallery navigation (defaults to `false`)
* `galleryCounter`: Should display counter at the top left corner (defaults to `true`)
* `galleryButtons`: What buttons should appear in the top right corner (defaults to `["zoom", "slideShow", "close"]`, possible values are `zoom`, `share`, `slideShow`, `fullScreen`, `download`, `thumbs`, `close`) - note default value is different from fancybox's default value
* `galleryAnimationEffect`: Open/close animation type (defaults to `zoom`, possible values are `false` (disable), `zoom`, `fade`, `zoom-in-out`)
* `galleryAnimationDuration`: Duration in ms for open/close animation (defaults to `366`)
* `galleryTransitionEffect`: Transition effect between slides (defaults to `fade`, possible values are `false` (disable), `fade`, `slide`, `circular`, `tube`, `zoom-in-out`, `rotate`)
* `galleryTransitionDuration`: Duration in ms for transition animation (defaults to `366`)
* `gallerySlideshowSpeed`: Slideshow speed in ms (defaults to `3000`)

Other fancybox options can be set via creating a custom JavaScript file, overrinding `$.fancybox.defaults` values. Example:

```javascript
$.fancybox.defaults.protect = true;
$.fancybox.defaults.slideClass = "mycustomclass";
```

### Custom CSS

You can override the built-in css by using your own. Put your own css files in the `static` directory of your website and modify the `customCss` parameter in your config file. The path referenced in the parameter should be relative to the `static` folder.

For example, if your css files are `static/css/custom.css` and `static/css/custom2.css`, then add the following to the config file:

```toml
[params]
  customCss = ["css/custom.css", "css/custom2.css"]
```

If you wish to completely override the color scheme, specify `useDefaultColors = false` in your configuration. You can check the file `assets/hugo-split-gallery/colors.css` to see an example of styles to re-implement.

Similarly, if you wish to override the fonts scheme, specify `useDefaultFonts = false`.

```toml
[params]
  useDefaultColors = false
  useDefaultFonts = false
```

### Custom scripts

If you need custom JavaScript scripts to be included, similarly to CSS files, you can put your own JS files in the `static` directory of your website and modify the `customJs` parameter in your config file. The path referenced in the parameter should be relative to the `static` folder.

```toml
[params]
  customJs = ["js/custom.js", "js/custom2.js"]
```

### Logo

You can have a logo displayed next to your site's title. Put your logo into the `static` directory of your website, and add the `siteLogo` parameter to the site params in your config file. For example:

```toml
[params]
  siteLogo = "img/logo.png"
```

## Updating

From the folder of your Hugo website, run the following commands to update to the latest version:

```bash
cd themes/hugo-split-gallery && git pull
```

## Reference

### Site parameters reference

* `customCss`: list of paths to custom CSS files to include (optional, defaults to empty list)
* `customJs`: list of paths to custom JavaScript files to include (optional, defaults to empty list)
* `enableDownloadAll`: enable _Download all photos_ link on posts (optional, defaults to `true`)
* `footnote`: enable a footnote to be displayed on all pages (optional, defaults to none)
* `galleryAnimationDuration`: Duration in ms for open/close animation (defaults to `366`)
* `galleryAnimationEffect`: Open/close animation type (defaults to `zoom`, possible values are `false` (disable), `zoom`, `fade`, `zoom-in-out`)
* `galleryBaseClass`: Custom CSS class for layout (defaults to empty)
* `galleryButtons`: What buttons should appear in the top right corner (defaults to `["zoom", "slideShow", "close"]`, possible values are `zoom`, `share`, `slideShow`, `fullScreen`, `download`, `thumbs`, `close`) - note default value is different from fancybox's default value
* `galleryCounter`: Should display counter at the top left corner (defaults to `true`)
* `galleryLoop`: Enable infinite gallery navigation (defaults to `false`)
* `gallerySlideClass`: Custom CSS class for slide element (defaults to empty)
* `gallerySlideshowSpeed`: Slideshow speed in ms (defaults to `3000`)
* `galleryTransitionDuration`: Duration in ms for transition animation (defaults to `366`)
* `galleryTransitionEffect`: Transition effect between slides (defaults to `fade`, possible values are `false` (disable), `fade`, `slide`, `circular`, `tube`, `zoom-in-out`, `rotate`)
* `includeOriginalImage`: include original image as very-high-res for photo galleries (optional, defaults to `true`)
* `largeImageSize`: size for high-res photo (optional, defaults to `2000px`)
* `siteLogo`: path to a logo to be displayed next to the title (optional, defaults to none)
* `useDefaultColors`: use default colors in theme (optional, defaults to `true`)
* `useDefaultFonts`: use default fonts in theme (optional, defaults to `true`)

### Post parameters reference

* `images`: list of paths to the featured images - must have at least one (required)
* `seealso`: list of paths to related posts (optional, default to none)

### Warnings

There can be warnings during generation of the website. Here are all the warnings you may encounter:

* `Could not find leaf page for <page> (<kind>), defaulting to <page>`: the template was not able to find pages for that kind; either the site/kind is empty, or this is an error and should be reported in this [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues)
* `Could not find leaf pages for <page> (<kind>), defaulting to [<page>]`: the template was not able to find pages for that kind; either the site/kind is empty, or this is an error and should be reported in this [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues)
* `Could not find featured image thumbnail for <page> (<kind>)`: the template was not able to find a suitable thumbnail for an element of this page. You should also see a `Could not find featured image for <page> (<kind>)` warning to find out what specific page is problematic. Check that such page has an `images` parameter pointing to a valid image
* `Could not find pages for %s (%s)`: the template was not able to find pages for that kind; this is an error and should be reported in this [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues)
* `Should not be called here`: a partial template was wrongly called, this is an error and should be reported in this [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues)
* `Could not find featured image for <page> (<kind>)`: the template was not able to find a suitable featured image for this page. Check that it has an `images` parameter pointing to a valid image

## License

This theme is licensed under the [GPLv3 license](/LICENSE), except for the photos distributed with the example site which are not free to use.

This theme includes [fancybox](https://fancyapps.com/fancybox/3/), which is not free to use for commercial applications. If you wish to use this theme in commercial applications, you will need to get a [commercial license from fancybox](https://fancyapps.com/fancybox/3/#license).

All other third-parties included are free to use (under MIT License, SIL OFL 1.1, BSD-2-Clause).

## Contributing

If you find a bug or have an idea for a feature, feel free to use the [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues) to let me know.

In case you want to merge some code, you are more than welcome to open merge requests (with or without a related issue). Please target the `next` branch of this repo, as `main` is reserved for tagged versions. Please also note this theme follows semantic versioning, thus don't introduce breaking changes if they are not necessary.

### Adding translation

If you wish to add a new translation, there are two files to create:

* `i18n/<language>.toml`, containing main theme translations
* `assets/hugo-split-gallery/fancybox.<language>.js`, containing fancybox translations

### Adding new third-parties / updating third-parties

Adding/updating a third-party requires npm to be used. Resources (JS, CSS, images, fonts, etc.) are copied and commited into git, so using this theme does not require npm.

1. Add or update the third-party as a development dependency (e.g. `npm install --save-dev my-third-party`)
2. Edit `post-install.js` to add the resources to be copied
3. Run `npm i` to run the script
4. Edit `layouts/partials/site-script.html` and/or `layouts/partials/site-style.html` to include the new resources
   1. If there are non-CSS/JS files (e.g. images, fonts), Hugo will not copy them by itself whne generating the site. A hack is provided in `layouts/partials/site-style.html` to bundle them anyway.
