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

test.page("http://127.0.0.1:8080/hugo-split-gallery/fr/posts/grand-veymont/index.html")
    ("French translation should use images from main site", async t => {
        const items = Selector(".split-grid img");
        await t
            .expect(items.nth(0).getAttribute("src")).contains("/hugo-split-gallery/posts/grand-veymont/images/DSCF0348");
    });

test.page("http://127.0.0.1:8080/hugo-split-gallery/fr/posts/lake-lauvitel/index.html")
    ("French translation should use tracks from main site", async t => {
        const items = Selector("#list-tracks li a");
        await t
            .expect(items.nth(0).getAttribute("href")).contains("/hugo-split-gallery/posts/lake-lauvitel/2016-05-21%20Lac%20du%20Lauvitel.gpx");
    });
