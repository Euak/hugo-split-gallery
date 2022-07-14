# Hugo Split Gallery | [Demo](https://tmuguet.gitlab.io/hugo-split-gallery/)

Split Gallery is a theme for [Hugo](http://gohugo.io/) focused on photos and maps.  
This Hugo theme features a photo gallery, a map and custom content per page, and supports custom sections and taxonomies.

This project is licensed under the [GPLv3 license](/LICENSE). Due to 3rd-party included in this project, you are *not* free to use it for commercial applications. See the license section below for more info.

It is inspired by [Hugo Split Theme](https://github.com/christianmendoza/hugo-split-theme), itself ported from [Split](https://onepagelove.com/split) by [One Page Love](https://onepagelove.com).

![screenshot](https://gitlab.com/tmuguet/hugo-split-gallery/-/raw/main/images/tn.png)

[Demo](https://tmuguet.gitlab.io/hugo-split-gallery/) (built with [exampleSite](https://gitlab.com/tmuguet/hugo-split-gallery/-/tree/main/exampleSite) as source); [Live example](https://thomasmuguet.info/).

This project follows [semantic versioning](https://semver.org/), meaning any new minor version (e.g. 1.1.0 -> 1.2.0) only introduces new features without breaking changes, and breaking changes are only introduced in major versions (e.g. 1.1.0 -> 2.0.0).
This means you can safely upgrade from one minor version to the next one.

## Installation

Inside the folder of your Hugo site, run the following command:

```bash
git submodule add https://gitlab.com/tmuguet/hugo-split-gallery.git themes/hugo-split-gallery
```

Then, change (or add) the theme in the site's configuration (e.g. `config.toml`):

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

In other words, photos displayed in the gallery **must** be in a `images` subfolder, and track(s) -if any- must be at the same level as the content. Supported formats for tracks are GPX (`.gpx` files), KML (`.kml` files) and GeoJSON (`.geojson` files).

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

Some additionnal parameters are available to tweak your site, described in [the documentation](docs/index.md).

## Updating

From the folder of your Hugo website, run the following commands to update to the latest version:

```bash
cd themes/hugo-split-gallery && git pull
```

## Reference

For reference on site parameters, post parameters and warnings, see [the documentation](docs/reference.md).

## License

This theme is licensed under the [GPLv3 license](/LICENSE), except for the photos distributed with the example site which are not free to use.

This theme includes [fancybox](https://fancyapps.com/fancybox/3/), which is not free to use for commercial applications. If you wish to use this theme in commercial applications, you will need to get a [commercial license from fancybox](https://fancyapps.com/fancybox/3/#license).

All other third-parties included are free to use (under MIT License, SIL OFL 1.1, BSD-2-Clause).

## Contributors

* @tmuguet: Maintainer
* @beva-sdev: Czech and German translations, numerous bug reporting

## Contributing

If you find a bug or have an idea for a feature, feel free to use the [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues) to let me know.

In case you want to merge some code, you are more than welcome to open merge requests (with or without a related issue). Please branch from the `next` version of this repo and target the `next` branch for the merge request, as `main` is reserved for tagged versions. Please also note this theme follows semantic versioning, thus don't introduce breaking changes if they are not necessary.

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
