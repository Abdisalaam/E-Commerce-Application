const babelPlaguns = [
  "@babel/plugin-proposal-optional-chaining"
];
if (process.env.NODE_ENV === "production") {
  babelPlaguns.push([
    "transform-remove-console",
    {
      "exclude": [ "error", "warn"]
    }
  ]);
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: babelPlaguns
}
