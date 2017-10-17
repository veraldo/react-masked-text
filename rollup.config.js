// rollup.config.js
const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");

export default {
  input: "src/text-input-mask.js",
  output: {
    file: "dist/text-input-mask.js",
    format: "umd"
  },
  name: 'ReactTextMask',
  globals: {
    react: 'React'
  },
  external: [ 'moment', 'react' ],
  globals: {
    moment: 'moment',
    react: 'react'
  },
  plugins: [
    resolve({jsnext: true}),
    babel()
  ]
}