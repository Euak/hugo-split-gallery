import { Selector } from 'testcafe';

import * as asserts from '../asserts.js';
import * as selectors from '../selectors.js';

fixture("Taxonomies")
    .page("http://127.0.0.1:8080/hugo-split-gallery/");

test("Taxonomies should be displayed on homepage", async t => {
    await t
        .expect(Selector("#taxonomy-location ul").childElementCount).eql(3)
        .expect(Selector("#taxonomy-season ul").childElementCount).eql(4);
});

test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/index.html")
    ("Locations taxonomy page title should be taxonomy plural with icon", async t => {
        await t.expect(Selector("h1").innerText).eql("Locations")
            .expect(Selector("h1 i").classNames).eql(["fa", "fa-location-arrow", "fa-fw"]);
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/index.html")
    ("Locations taxonomy page should display 3 items", async t => {
        await t.expect(Selector(".split-bio ul").childElementCount).eql(3);
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/index.html")
    ("Locations taxonomy grid should display 3 photos + 1 padding element", async t => {
        await t.expect(Selector(".split-grid").childElementCount).eql(4);
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/index.html")
    ("Locations taxonomy page background image should be from the latest post, with filters", async t => {
        await asserts.backgroundBlurred(t, selectors.background(), "posts/lake-lauvitel/images/IMGP5799");
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/index.html")
    ("Locations taxonomy page social media images should be from the latest post, without filters", async t => {
        await asserts.background(t, selectors.opengraphImage(), "posts/lake-lauvitel/images/IMGP5799");
        await asserts.background(t, selectors.twitterImage(), "posts/lake-lauvitel/images/IMGP5799");
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/index.html")
    ("Locations taxonomy page should not have a map", async t => {
        await t
            .expect(Selector("#mapid").exists).notOk;
    });

test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/oisans/index.html")
    ("Oisans term page title should be taxonomy singular + term with icon", async t => {
        await t.expect(Selector("h1").innerText).eql("Location Oisans")
            .expect(Selector("h1 i").classNames).eql(["fa", "fa-location-arrow", "fa-fw"]);
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/oisans/index.html")
    ("Oisans term page should display 5 items", async t => {
        await t.expect(Selector(".split-bio ul").childElementCount).eql(5);
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/oisans/index.html")
    ("Oisans term grid should display 5 photos + 1 padding element", async t => {
        await t.expect(Selector(".split-grid").childElementCount).eql(6);
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/oisans/index.html")
    ("Oisans term page background image should be from the latest post, with filters", async t => {
        await asserts.backgroundBlurred(t, selectors.background(), "posts/lake-lauvitel/images/IMGP5799");
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/oisans/index.html")
    ("Oisans term page social media images should be from the latest post, without filters", async t => {
        await asserts.background(t, selectors.opengraphImage(), "posts/lake-lauvitel/images/IMGP5799");
        await asserts.background(t, selectors.twitterImage(), "posts/lake-lauvitel/images/IMGP5799");
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/oisans/index.html")
    ("Oisans term page map should display 3 track markers + 2 photo markers", async t => {
        await t
            .expect(Selector("#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-gray").count).eql(2)
            .expect(Selector("#mapid .leaflet-marker-pane .awesome-marker").count).eql(3+2);
    });
