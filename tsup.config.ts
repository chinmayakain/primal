import { defineConfig } from "tsup";

export default defineConfig({
  target: "es6",
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
})