import { Selector } from 'testcafe';

fixture("Baseof content")
    .page("http://127.0.0.1:8080/hugo-split-gallery/");

test("Footnote should be displayed", async t => {
    await t.expect(Selector(".split-footnote").innerText).eql("Fork me on GitLab!");
});
test("Credit should be displayed", async t => {
    await t.expect(Selector(".split-credit").innerText).contains("Powered by");
});
test("Prev/Next links should not be displayed on homepage", async t => {
    await t.expect(Selector("#menu-prevnext").count).eql(0);
});
test.page("http://127.0.0.1:8080/hugo-split-gallery/posts/lake-lauvitel/index.html")
    ("Only prev link should be displayed on latest post", async t => {
        await t.expect(Selector("#menu-prevnext").childElementCount).eql(1);
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/posts/lakes-muzelle-lauvitel/index.html")
    ("Only next link should be displayed on first post", async t => {
        await t.expect(Selector("#menu-prevnext").childElementCount).eql(1);
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/posts/grand-veymont/index.html")
    ("Prev and next links should be displayed", async t => {
        await t.expect(Selector("#menu-prevnext").childElementCount).eql(2);
    });
