# Hugo Split Gallery

Split Gallery is a theme for [Hugo](http://gohugo.io/) focused on photos and maps.  
This Hugo theme features a photo gallery, a map and custom content per page, and supports custom sections and taxonomies.

It is inspired by [Hugo Split Theme](https://github.com/christianmendoza/hugo-split-theme), itself ported from [Split](https://onepagelove.com/split) by [One Page Love](https://onepagelove.com).

![screenshot](/images/screenshot.png)

[DEMO](https://thomasmuguet.info)

## Installation

Inside the folder of your Hugo site run:

```bash
git submodule add https://gitlab.com/tmuguet/hugo-split-gallery.git themes/hugo-split-gallery
```

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Getting started

After installing the theme successfully it requires a just a few more steps to get your site running.

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

* **requires** a `featured_image` parameter, refering to a picture from this post, which will be used as thumbnail in the home gallery,
* can have a `seealso` parameter, refering to one or multiple other posts.

Example:

```text
---
title: "Lac de la Muzelle et lac Lauvitel"
date: 2017-07-30T00:00:00+00:00
featured_image: "images/IMGP3719.jpg"
seealso: ["posts/lac-lauvitel", "posts/lac-muzelle"]    # If single, can avoid the brackets
---

Cat ipsum dolor sit amet, hide from vacuum cleaner swat turds around the house hate dog don't nosh on the birds. Run outside as soon as door open. 
```

## Tweaking your site

In order to work, this theme does not require anything specific from the configuration of your site.

This theme supports all configuration options specified in [Hugo documentation](https://gohugo.io/getting-started/configuration/). If you have issues with an option, please let me know via the [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues) or by [email](mailto:hi@tmuguet.me).

Some additionnal parameters are available to tweak your site, described below.

### Taxonomies

Hugo Split Gallery supports custom taxonomies (as long as they don't have space in their name).

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

## Contributing

If you find a bug or have an idea for a feature, feel free to use the [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues) to let me know.
