const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  // reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://okiro.fueko.net/content/images',
  },
  i18n: {
    locales: ['en-US', 'ja'],
    defaultLocale: 'en-US',
  },
});
