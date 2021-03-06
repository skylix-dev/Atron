import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: "AtronElectron.ts",
	output: {
		dir: "dist",
		format: "cjs",
	},
	plugins: [
		typescript({ module: "ESNext" }),
		commonjs({ transformMixedEsModules: true })
	],
};