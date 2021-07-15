import { Selector } from 'testcafe';

fixture("Sections")
    .page("http://127.0.0.1:8080/hugo-split-gallery/posts/index.html");

test.page("http://127.0.0.1:8080/hugo-split-gallery/")
    ("Sections should be displayed on homepage with 2 items", async t => {
        await t.expect(Selector("#sections ul").childElementCount).eql(2);
    });

test("Title should come from Front Matter", async t => {
    await t.expect(Selector("h1").innerText).eql("My hikes");
});
test("Main content should display 3 items", async t => {
    await t.expect(Selector(".split-bio ul").childElementCount).eql(3);
});
test("Grid should display 3 photos + 1 padding element", async t => {
    await t.expect(Selector(".split-grid").childElementCount).eql(4);
});
test("Background image should be from the latest post, with filters", async t => {
    await t.expect(Selector("#gallery-panel").getAttribute("style")).contains("http://localhost:8080/hugo-split-gallery/posts/lake-lauvitel/images/IMGP5799_");
});
test("Map should display 4 markers", async t => {
    await t
        .expect(Selector("#mapid .leaflet-marker-pane .awesome-marker").count).eql(4);
});
