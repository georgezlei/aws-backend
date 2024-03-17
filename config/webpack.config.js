const fs = require("fs");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const packages = fs
  .readdirSync(`${process.cwd()}/src/functions`)
  .filter((package) => package !== "__tests__");
const entries = packages.reduce((acc, package) => {
  return {
    ...acc,
    [`${package}/index`]: `./src/functions/${package}/index.ts`,
  };
}, {});

module.exports = {
  target: "node",
  mode: "production",
  entry: entries,
  output: {
    path: `${process.cwd()}/dist`,
    filename: "[name].js",
    library: {
      type: "umd",
    },
  },
  optimization: {
    usedExports: true,
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: "config/tsconfig.json" })],
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "config/tsconfig.json",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
};
