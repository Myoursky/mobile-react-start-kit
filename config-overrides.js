const { override, addWebpackAlias } = require("customize-cra");
const rewirePostcss = require("react-app-rewire-postcss");
const px2rem = require("postcss-px2rem");
const path = require("path");

module.exports = override(
  // add an alias for "page" imports
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
  }),
  (config, env) => {
    // 重写postcss
    rewirePostcss(config, {
      plugins: () => [
        // require("postcss-flexbugs-fixes"),
        // require("postcss-preset-env")({
        //   autoprefixer: {
        //     flexbox: "no-2009",
        //   },
        //   stage: 3,
        // }),
        // 关键:设置px2rem
        px2rem({
          remUnit: 75,
          exclude: `/node-modules/`,
        }),
      ],
    });
    return config;
  },
);
