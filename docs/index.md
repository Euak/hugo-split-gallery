# Tweaking this theme

## Taxonomies

Hugo Split Gallery supports custom taxonomies.

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

See also the Multilingual section for configuring the taxonomies if you are using multiple languages.

## Logo

You can have a logo displayed next to your site's title. Put your logo into the `static` directory of your website, and add the `siteLogo` parameter to the site params in your config file. For example:

```toml
[params]
  siteLogo = "img/logo.png"
```

## Images

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

If you are using multiple languages, images will not be duplicated. They will be present only in the first site generated (e.g. language with lower weight, or first language in the alphabetical order). Other sites will reference the first one.

You can disable the inclusion of the original high-res images via setting `includeOriginalImage` to `false` in the site's configuration. This helps saving disk space and makes the build much faster. In such case, you **must** also set [`publishResources`](https://gohugo.io/content-management/build-options/#publishresources) to `false` in your posts.

Example of site configuration:

```toml
[params]
  includeOriginalImage = false
```

Example of posts configuration (`posts/_index.md`):

```text
---
title: "My hikes"
cascade:
    _build:
        publishResources: false
---

```

In case of multilingual site, you will need a `_index.md` for *each* language for disabling publishing resources (e.g. `_index.fr.md`, `_index.cs.md`, etc.).

## Download

A link *Download all photos* can be displayed for all posts. This is disabled by default, but can be enabled via setting the `enableDownloadAll` site's parameter to `true`. See also the `galleryButtons` parameter to enable or disable download of photos within the gallery.

## Gallery

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

## Footnotes

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

## Pagination

You can limit the number of posts displayed in the list of the home page via the `paginate` parameter of your site.

```toml
[params]
  paginate = 10
```

## Multilingual

### Taxonomies

In case your site is multilingual, you have 2 possibilities for taxonomies:

1. Define whole new taxonomy per-language (as described in [Hugo documentation](https://gohugo.io/content-management/multilingual/#taxonomies-and-blackfriday))
   1. The simplest solution, but:
   2. Taxonomy/terms pages will not be seen as translations of each-others
   3. The [Front Matter](https://gohugo.io/content-management/front-matter/) taxonomies must be translated
2. Translate the taxonomies
   1. More complicated to set-up initially, but:
   2. Lets translations be written only once and for all in [translations files](https://gohugo.io/content-management/multilingual/#translation-of-strings)
   3. The [Front Matter](https://gohugo.io/content-management/front-matter/) taxonomies are defined in the language you wish

The example site provided in this theme uses the second method.

For translating the taxonomies, you will need to create translation files for each language in a `i18n` folder at the root of your site:

```text
/
├── content
├── i18n
│   ├── en.toml
│   ├── fr.toml
│   └── ..
├── config.toml
```

The structure of the file is:

```toml
[<taxonomy>]
other = "<Taxonomy Singular>"

[<taxonomy>s]
other = "<Taxonomy Plural>"

[<taxonomy>-<term>]
other = "<Term>"
```

Note that you don't need to translate all the taxonomies or terms if it's not needed.

For instance, given the following taxonomies:

```text
Season             <- Taxonomy
    Fall           <- Term
    Spring         <- Term
    Summer         <- Term
    Winter         <- Term
Location           <- Taxonomy
    Oisans         <- Term
    Vercors        <- Term
    Écrins         <- Term
```

The corresponding translation file can be:

```toml
[location]
other = "Location"

[locations]
other = "Locations"

[season]
other = "Season"

[seasons]
other = "Seasons"

[season-Spring]
other = "Spring"

[season-Winter]
other = "Winter"

[season-Fall]
other = "Fall"

[season-Summer]
other = "Summer"
```

## Custom CSS

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

## Custom scripts

If you need custom JavaScript scripts to be included, similarly to CSS files, you can put your own JS files in the `static` directory of your website and modify the `customJs` parameter in your config file. The path referenced in the parameter should be relative to the `static` folder.

```toml
[params]
  customJs = ["js/custom.js", "js/custom2.js"]
```

## Sharing media across multiple pages

If you wish to share a featured image across multiple pages without duplicating it, you can create a [headless bundle](https://gohugo.io/content-management/page-bundles/#headless-bundle) `media` with images there.

```text
content/
├── about
├── posts
├── media
│   ├── index.md
│   └── images
│       ├── IMGP.jpg
│       └── ..
```

If you wish to use a different bundle than `media`, you can use the `sharedMediaBundle` site's parameter (for site-wide) or `sharedMediaBundle` Front Matter parameter (for only one page).

## Reference

See [reference.md](reference.md).
