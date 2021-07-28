//import typescript from 'rollup-plugin-typescript3';
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const sourceMap = false

export default {
    input: "src/index.ts",
    output: {
        dir: './',
        format: 'esm',
        sourcemap: sourceMap
    },
    plugins: [
        peerDepsExternal(),
        resolve(),
        typescript({
            declaration: true,
            sourceMap: sourceMap,
            declarationDir: './',
            rootDir: 'src/'
        }),
        commonjs({sourceMap: sourceMap})
    ]
}