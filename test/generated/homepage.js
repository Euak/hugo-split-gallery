import { Selector } from 'testcafe';

fixture `Home page content`
    .page `http://127.0.0.1:8080/hugo-split-gallery/`;

test("Title should come be site's title", async t => {
    await t.expect(Selector('h1').innerText).eql('Hugo Split Gallery theme sample site');
});
test('Main content should display 6 items', async t => {
    await t.expect(Selector('.split-bio ul').childElementCount).eql(6);
});
test('Grid should display 6 photos + 1 padding element', async t => {
    await t.expect(Selector('.split-grid').childElementCount).eql(7);
});
test('Sections should be displayed with 2 items', async t => {
    await t.expect(Selector('#sections ul').childElementCount).eql(2);
});
test('Footnote should be displayed', async t => {
    await t.expect(Selector('.split-footnote').innerText).eql('Fork me on GitLab!');
});
test('Map should display 6 markers', async t => {
    await t
        .expect(Selector('#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-gray').count).eql(2)
        .expect(Selector('#mapid .leaflet-marker-pane .awesome-marker').count).eql(6);
});
