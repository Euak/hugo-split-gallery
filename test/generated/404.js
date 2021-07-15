import { Selector } from 'testcafe';

fixture("404")
    .page("http://127.0.0.1:8080/hugo-split-gallery/404.html");

test("Background image should be from the latest content, without filters", async t => {
    await t.expect(Selector("#gallery-panel").getAttribute("style")).contains("http://localhost:8080/hugo-split-gallery/media/images/DSCF0348.jpg");
});
