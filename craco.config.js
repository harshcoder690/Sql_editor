const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1a21d3",
              "@primary-color-hover": "#ececf8",
              "@icon-color-hover": "#62e2fc",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};