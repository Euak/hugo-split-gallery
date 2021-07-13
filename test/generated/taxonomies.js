import { Selector } from 'testcafe';

fixture `Home page content`
    .page `http://127.0.0.1:8080/hugo-split-gallery/`;

test('Taxonomies should be displayed on homepage', async t => {
    await t
        .expect(Selector('#taxonomy-location ul').childElementCount).eql(3)
        .expect(Selector('#taxonomy-season ul').childElementCount).eql(4);
});
