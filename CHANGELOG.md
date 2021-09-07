# Hugo Split Gallery Changelog

## 1.x branch

### 1.2.0

#### UX

* Enhancement: Order photos by date of capture instead of by filenames (#27)

### 1.1.1

#### UX

* Enhancement: Defer zipping to when "Download all photos" button is clicked (avoids downloading all full-res pictures too soon)
* Enhancement: load tracks synchronously
* Fix: Background image in 404 page does not use filters
* Fix: Background image on homepage uses latest post belonging to a section

#### Documentation

* Fix: Fixed documentation on enableDownloadAll parameter

#### Internal

* Enhancement: Using [toGeojson](https://github.com/tmcw/togeojson) for parsing files (#25)
* Enhancement: Added CI to validate theme (#23, #24)

### 1.1.0

#### UX

* Enhancement: Add option to display available translations (#15)
* Enhancement: Remove standalone pages from homepage (#18)
* Enhancement: Show section in lists if multiple sections exist (#2O)
* Enhancement: Display map if photos are geotagged (#21)

#### Configuration

* Enhancement: Add parameter to configure link to map2gpx (#14)
* Enhancement: Use i18n for taxonomies (#16)
* Enhancement: Enable shared media for featured images (#19)

#### Example site

* Enhancement: Add menu in exampleSite (#13)
* Enhancement: Add sections in exampleSite (#17)
* Enhancement: Added (partial, on purpose) French translation

### 1.0.3

* Fix: hugo min version was wrongly set to 0.64.0, is really 0.73.0

### 1.0.2

*WARNING*: hugo min version was wrongly set to 0.64.0, is really 0.73.0

* Enhancement: Support taxonomy terms with spaces (#11)

### 1.0.1

*WARNING*: hugo min version was wrongly set to 0.64.0, is really 0.73.0

* Enhancement: Change fancybox progress bar color (#7)
* Fix: Hide map on homepage if no tracks (#8)
* Fix: Hide "Photos taken on" item if no photos (#9)
* Fix: Image still tries to display in grid even if no thumbnail (#10)

### 1.0.0

*WARNING*: hugo min version was wrongly set to 0.64.0, is really 0.73.0

Initial release
