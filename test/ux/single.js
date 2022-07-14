import { Selector } from 'testcafe';

fixture("Single UX")
    .page("http://127.0.0.1:8080/hugo-split-gallery/posts/lake-lauvitel/index.html");

test("Clicking on a track marker should display its popup", async t => {
    await t
        .expect(Selector("#mapid .leaflet-popup-pane").hasChildElements).notOk()
        .click(Selector("#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-green"))
        .expect(Selector("#mapid .leaflet-popup-pane").hasChildElements).ok()
        .expect(Selector("#mapid .leaflet-popup-pane .leaflet-popup-content").innerText).contains("2021-03-01 Lac Lauvitel.kml")
        .expect(Selector("#mapid .leaflet-popup-pane .leaflet-popup-content").innerText).contains("Download the track")
        .expect(Selector("#mapid .leaflet-popup-pane .leaflet-popup-content").innerText).contains("Open the track in map2gpx");
});
test("Clicking on a photo marker should launch gallery", async t => {
    await t
        .expect(Selector(".fancybox-container").exists).notOk()
        .click(Selector("#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-gray").nth(0))
        .expect(Selector(".fancybox-container").exists).ok();
});
test.skip("Hovering on a track should bring it up", async t => {
    // TODO: find a way to make that test work
    await t.expect(Selector("#mapid path.leaflet-interactive").nth(-1).getAttribute('stroke')).eql('#F59630');

    await t
        .hover(Selector("#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-green").nth(0))
        .expect(Selector("#mapid path.leaflet-interactive").nth(-1).getAttribute('stroke')).eql('#72B026');
});
test("Hovering on a photo should move the map", async t => {
    const map = Selector("#mapid .leaflet-proxy");
    const initialStyle = map.style; // Using transform property as a proxy to detect movement

    await t
        .hover(Selector(".split-grid a").nth(0))
        .expect(map.style).notEql(initialStyle);
});
test("Clicking on a photo should launch gallery", async t => {
    await t
        .expect(Selector(".fancybox-container").exists).notOk()
        .click(Selector(".split-grid a").nth(0))
        .expect(Selector(".fancybox-container").exists).ok();
});
