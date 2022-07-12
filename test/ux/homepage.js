import { Selector } from 'testcafe';

fixture("Home page UX")
    .page("http://127.0.0.1:8080/hugo-split-gallery/");

test("Clicking on a track marker should display its popup", async t => {
    await t
        .expect(Selector("#mapid .leaflet-popup-pane").hasChildElements).notOk()
        .click(Selector("#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-purple")) // Select "Grand Veymont"
        .expect(Selector("#mapid .leaflet-popup-pane").hasChildElements).ok()
        .expect(Selector("#mapid .leaflet-popup-pane .leaflet-popup-content").innerText).eql("Grand Veymont");
});
test("Clicking on a photo marker should display its popup", async t => {
    await t
        .click(Selector("#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-gray").nth(0))
        .expect(Selector("#mapid .leaflet-popup-pane").hasChildElements).ok()
        .expect(Selector("#mapid .leaflet-popup-pane .leaflet-popup-content").innerText).eql("La Grave");
});
test.skip("Hovering on a track should bring it up", async t => {
    // TODO: find a way to make that test work
    await t.expect(Selector("#mapid path.leaflet-interactive").nth(-1).getAttribute('stroke')).eql('#F59630');

    await t
        .hover(Selector("#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-green").nth(0)).wait(100)
        .expect(Selector("#mapid path.leaflet-interactive").nth(-1).getAttribute('stroke')).eql('#72B026');
});
test("Hovering on a photo with a track should move the map", async t => {
    const map = Selector("#mapid .leaflet-proxy");
    const initialStyle = map.style; // Using transform property as a proxy to detect movement

    await t
        .hover(Selector(".split-grid a").nth(0))
        .expect(map.style).notEql(initialStyle);
});
test("Hovering on a geotagged photo should move the map", async t => {
    const map = Selector("#mapid .leaflet-proxy");
    const initialStyle = map.style; // Using transform property as a proxy to detect movement

    await t
        .hover(Selector(".split-grid a").nth(2))
        .expect(map.style).notEql(initialStyle);
});
