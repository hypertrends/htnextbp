const withSass = require("@zeit/next-sass");
const tailwindCss = require("tailwindcss");

module.exports = withSass({
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? 
      process.env.LOCALE_SUBPATHS : 'none',
  },
  webpack(config, options) {
    const rules = [{
      test: /\.scss$/,
      use: [{
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ]
        }
      },
      { loader: "sass-loader" }
      ]
    }];
 return {
    ...config,
    module: { 
      ...config.module, 
      rules: [...config.module.rules, ...rules] 
    }
   };
 }});

// module.exports = {
//   publicRuntimeConfig: {
//     localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
//       ? process.env.LOCALE_SUBPATHS
//       : 'none',
//   },
// };