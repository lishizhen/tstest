import ts from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";
import path from "path";
import { fileURLToPath } from "url";

export default {
  input: "./src/index.ts",
  output: {
    file: path.resolve("./dist/bundle.js"),
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts"], // 解析文件的格式
    }),
    ts({
      // 才有url的方式产生绝对路径
      tsconfig: fileURLToPath(new URL("tsconfig.json", import.meta.url)),
    }),
    serve({
      open: true,
      openPage: "/public/index.html",
      port: 3333,
    }),
  ],
};
