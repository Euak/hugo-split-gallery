import { Selector } from 'testcafe';

import * as asserts from '../asserts.js';
import * as selectors from '../selectors.js';

fixture("Home page content")
    .page("http://127.0.0.1:8080/hugo-split-gallery/");

test("Title should be site's title", async t => {
    await t.expect(Selector("h1").innerText).eql("Hugo Split Gallery theme sample site");
});
test("Main content should display 6 items", async t => {
    await t.expect(Selector(".split-bio ul").childElementCount).eql(6);
});
test("Grid should display 6 photos + 1 padding element", async t => {
    await t.expect(Selector(".split-grid").childElementCount).eql(7);
});
test("Background image should be from the latest post, with filters", async t => {
    await asserts.backgroundBlurred(t, selectors.background(), "posts/lake-lauvitel/images/IMGP5799");
});
test("Social media images should be from the latest post, without filters", async t => {
    await asserts.background(t, selectors.opengraphImage(), "posts/lake-lauvitel/images/IMGP5799");
    await asserts.background(t, selectors.twitterImage(), "posts/lake-lauvitel/images/IMGP5799");
});
test("Map should display 5 track markers + 2 photo markers", async t => {
    await t
        .expect(Selector("#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-gray").count).eql(2)
        .expect(Selector("#mapid .leaflet-marker-pane .awesome-marker").count).eql(5+2);
});
