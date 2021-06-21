{{ with .Site.Params.galleryLoop }}$.fancybox.defaults.loop = {{ . }}; {{ end }}
{{ with .Site.Params.galleryCounter }}$.fancybox.defaults.infobar = {{ . }};{{ end }}
{{ with default (slice "zoom" "slideShow" "close") .Site.Params.galleryButtons }}$.fancybox.defaults.buttons = {{ . | jsonify }};{{ end }}
{{ with .Site.Params.galleryAnimationEffect }}$.fancybox.defaults.animationEffect = {{ . }}; {{ end }}
{{ with .Site.Params.galleryAnimationDuration }}$.fancybox.defaults.animationDuration = {{ . }}; {{ end }}
{{ with .Site.Params.galleryTransitionEffect }}$.fancybox.defaults.transitionEffect = {{ . }}; {{ end }}
{{ with .Site.Params.galleryTransitionDuration }}$.fancybox.defaults.transitionDuration = {{ . }}; {{ end }}
{{ with .Site.Params.gallerySlideshowSpeed }}$.fancybox.defaults.slideShow.speed = {{ . }}; {{ end }}
