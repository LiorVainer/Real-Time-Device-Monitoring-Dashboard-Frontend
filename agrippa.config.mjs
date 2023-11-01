// @ts-check
import { defineConfig } from "agrippa";

export default defineConfig({
  options: {
    baseDir: "./src/components",
    createStylesFile: true,
    framework: "react",
    styleFileOptions: {
      module: true,
    },
    styling: "scss",
  },
});
