const plugin = require("../dist/index");

module.exports = {
  docsetIdentifier: "test",
  plugins: [
    {
      plugin,
      options: {
        swaggerJson: require("./petstore.json"),
      },
    },
  ],
};
