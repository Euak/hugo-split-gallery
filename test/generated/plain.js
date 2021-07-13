import { Selector } from 'testcafe';

fixture `Plain content`
    .page `http://127.0.0.1:8080/hugo-split-gallery/about/index.html`;

test('Title should come from Front Matter', async t => {
    await t.expect(Selector('h1').innerText).eql('About Hugo Split Gallery theme');
});
test('Content should be available', async t => {
    await t.expect(Selector('.split-bio p').count).eql(3);
});
test('Background image should match Front Matter', async t => {
    await t.expect(Selector('#gallery-panel').getAttribute("style")).contains("http://localhost:8080/hugo-split-gallery/media/images/DSCF0348.jpg");
});
