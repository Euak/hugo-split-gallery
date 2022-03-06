# Referenc

## Site parameters reference

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
* `map2gpx`: Enables opening tracks in map2gpx (defaults to `en`, possible values are `false` (disable), `en` (use [map2gpx.eu](https://map2gpx.eu)), `fr` (use [map2gpx.fr](https://map2gpx.fr)))
* `paginate`: max number of posts to display in the list of the home page (does not affect the grid of pictures on the right nor the map) (optional, defaults to `false` to disable pagination)
* `sharedMediaBundle`: path to a headless bundle for shared featured images (optional, defaults to `/media`)
* `showTranslations`: add links to available translations for each page (homepage, taxonomies, posts, etc.) (optional, defaults to `false`)
* `siteLogo`: path to a logo to be displayed next to the title (optional, defaults to none)
* `useDefaultColors`: use default colors in theme (optional, defaults to `true`)
* `useDefaultFonts`: use default fonts in theme (optional, defaults to `true`)

## Post parameters reference

* `images`: list of paths to the featured images - must have at least one (required)
* `layout`: alternative layout to be used - possible value is `plain` (useful for text-based pages without images) (optional)
* `seealso`: list of paths to related posts (optional, default to none)
* `sharedMediaBundle`: path to a headless bundle for shared featured images (optional, defaults to default site's configuration)

## Warnings

There can be warnings during generation of the website. Here are all the warnings you may encounter:

* `Could not find leaf page for <page> (<kind>), defaulting to <page>`: the template was not able to find pages for that kind; either the site/kind is empty, or this is an error and should be reported in this [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues)
* `Could not find leaf pages for <page> (<kind>), defaulting to [<page>]`: the template was not able to find pages for that kind; either the site/kind is empty, or this is an error and should be reported in this [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues)
* `Could not find featured image thumbnail for <page> (<kind>)`: the template was not able to find a suitable thumbnail for an element of this page. You should also see a `Could not find featured image for <page> (<kind>)` warning to find out what specific page is problematic. Check that such page has an `images` parameter pointing to a valid image
* `Could not find pages for %s (%s)`: the template was not able to find pages for that kind; this is an error and should be reported in this [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues)
* `Should not be called here`: a partial template was wrongly called, this is an error and should be reported in this [issue tracker](https://gitlab.com/tmuguet/hugo-split-gallery/-/issues)
* `Could not find featured image for <page> (<kind>)`: the template was not able to find a suitable featured image for this page. Check that it has an `images` parameter pointing to a valid image
