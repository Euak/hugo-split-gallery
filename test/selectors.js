import { Selector } from 'testcafe';

const background = () => {
    return Selector("#gallery-panel").getAttribute("style");
}
const opengraphImage = () => {
    return Selector("meta[property='og:image']").getAttribute("content");
}
const schemaImage = () => {
    return Selector("meta[itemprop='image']").getAttribute("content");
}
const twitterImage = () => {
    return Selector("meta[name='twitter:image']").getAttribute("content");
}

export { background, opengraphImage, schemaImage, twitterImage };