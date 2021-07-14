import { Selector } from 'testcafe';

fixture("Translations");

test.page("http://127.0.0.1:8080/hugo-split-gallery/")
    ("French translation should be available on homepage", async t => {
        await t.expect(Selector("#menu-translations").innerText).eql("fr");
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/about/index.html")
    ("French translation should not be available on about page", async t => {
        await t.expect(Selector("#menu-translations").count).eql(0);
    });

test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/index.html")
    ("French translation should be available on taxonomy pages", async t => {
        await t.expect(Selector("#menu-translations").innerText).eql("fr");
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/locations/oisans/index.html")
    ("French translation should be available on terms pages", async t => {
        await t.expect(Selector("#menu-translations").innerText).eql("fr");
    });

test.page("http://127.0.0.1:8080/hugo-split-gallery/404.html")
    ("French translation should not be available on 404 page", async t => {
        await t.expect(Selector("#menu-translations").count).eql(0);
    });
