import peerDepsExternal from "rollup-plugin-peer-deps-external";
import css from "rollup-plugin-import-css";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
export function makeRollupConfig(packageJSON, options = {}) {
  return {
    input: packageJSON.input,
    output: {
      file: packageJSON.module,
      format: "es",
    },
    external: [/@babel\/runtime/],
    plugins: [
      commonjs({ include: "node_modules/**" }),
      babel({
        presets: [
          "@babel/preset-env",
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
          "@babel/preset-typescript",
        ],
        plugins: ["@babel/plugin-transform-runtime"],
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        extensions,
      }),
      resolve({ extensions }),
      peerDepsExternal(),
      json(),
      css(),
    ],
    ...options,
  };
}
