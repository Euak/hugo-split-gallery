import { Selector } from 'testcafe';

fixture("Menus")
    .page("http://127.0.0.1:8080/hugo-split-gallery/");

test("Menus should display 4 items", async t => {
    await t.expect(Selector("#menu-main").childElementCount).eql(4);
});
