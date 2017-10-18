import fetch from 'isomorphic-unfetch';
import marked from 'marked';

async function getFromContentful({contentType, select = 'fields', locale = '*'} = {}) {
  const ENDPOINT = 'https://cdn.contentful.com/spaces/1tymefars1bj/entries?';
  const queryParam = {
    access_token: '9e9c6e46f1e52cfe1d30836842c1d98b131c9cb130902159f51b44bf6c41f09e',
    content_type: contentType,
    select,
    locale,
  };

  const query = Object.keys(queryParam)
      .reduce((accumulator, currentValue) => accumulator.concat(
          `${currentValue}=${queryParam[currentValue]}`), [])
      .join('&');

  const res = await fetch(`${ENDPOINT}${query}`);
  return await res.json();
}

export async function getContentFromContentful({contentType, select = 'fields', locale = '*'} = {}) {
  const json = await getFromContentful({contentType, select, locale});

  if (String(json.sys.type).toLowerCase() === 'array') {
    const rawContent = json.items[0].fields.content; // About has one field
    const englishContent = rawContent['en-US']; // Normalize contentful's language desc.

    if (englishContent) {
      delete rawContent['en-US'];
      rawContent['en'] = englishContent;
    }

    return Object.keys(rawContent).reduce((acc, current) => {
      const obj = {};
      const contentWithFixedNewLine = rawContent[current]
          .split(/\n{2}/)
          .map((item) => (
              item.replace(/\n/, '<br/>')
          ))
          .map((item) => (
              `<p>${item}</p>`
          ))
          .join('');
      obj[current] = marked(contentWithFixedNewLine);
      return Object.assign({}, obj);
    }, {});
  }
}

export default getFromContentful;