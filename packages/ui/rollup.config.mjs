import { makeRollupConfig } from "../config-rollup/rollup.config.mjs";
import packageJSON from "./package.json" assert { type: "json" };

export default makeRollupConfig(packageJSON);
