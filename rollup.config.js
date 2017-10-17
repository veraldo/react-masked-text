// rollup.config.js
const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");

export default {
  dest: "dist/text-input-mask.js",
  entry: "src/text-input-mask.js",
  format: "cjs",
  plugins: [
    commonjs(),
    babel()
  ]
}