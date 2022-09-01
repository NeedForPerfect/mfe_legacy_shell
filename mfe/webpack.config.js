const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "angular1"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angular1",
      library: { type: "var", name: "angular1" },
      filename: "remoteEntry.js",
      exposes: {
        './web-components': './src/bootstrap.ts',
        './another': './src/another-bootstrap.ts',
      },
      shared: {
        "rxjs": {}
      }
    }

    )
  ],
};