/**
 * Script to run after npm install
 *
 * Copy selected files to vendor's directory
 */

'use strict'

const gentlyCopy = require('gently-copy')
const path = require('path')
const fs = require('fs');

const assets = {
    'bootstrap': [
        'node_modules/bootstrap/LICENSE',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
    ],
    'jquery': [
        'node_modules/jquery/LICENSE.txt',
        'node_modules/jquery/dist/jquery.min.js'
    ],
    'fancybox': [
        'node_modules/@fancyapps/fancybox/README.md',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
    ],
    'leaflet': [
        'node_modules/leaflet/LICENSE',
        'node_modules/leaflet/dist/leaflet.css',
        'node_modules/leaflet/dist/leaflet.js',
        'node_modules/leaflet/dist/images',
    ],
    'togeojson': [
        'node_modules/@tmcw/togeojson/LICENSE',
        'node_modules/@tmcw/togeojson/dist/togeojson.umd.js',
    ],
    'font-awesome': [
        'node_modules/font-awesome/README.md',
        'node_modules/font-awesome/css',
        'node_modules/font-awesome/fonts',
    ],
    'leaflet.awesome-markers': [
        'node_modules/leaflet.awesome-markers/LICENSE',
        'node_modules/leaflet.awesome-markers/dist/leaflet.awesome-markers.css',
        'node_modules/leaflet.awesome-markers/dist/leaflet.awesome-markers.min.js',
        'node_modules/leaflet.awesome-markers/dist/images',
    ],
    'izmir': [
        'node_modules/@ciar4n/izmir/LICENSE',
        'node_modules/@ciar4n/izmir/izmir.min.css'
    ],
    'jszip': [
        'node_modules/jszip/LICENSE.markdown',
        'node_modules/jszip/dist/jszip.min.js'
    ],
    'jszip-utils': [
        'node_modules/jszip-utils/LICENSE.markdown',
        'node_modules/jszip-utils/dist/jszip-utils.min.js'
    ],
    'file-saver': [
        'node_modules/file-saver/LICENSE.md',
        'node_modules/file-saver/dist/FileSaver.min.js'
    ],
};

const vendorDest = path.resolve('assets', 'vendor');

Object.keys(assets).forEach((key) => {
    const dest = path.join(vendorDest, key);
    fs.mkdir(dest, { recursive: true }, (err) => {
        if (err) throw err;
        gentlyCopy(assets[key], dest);
    })
});

