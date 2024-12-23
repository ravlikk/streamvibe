import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  root: "src",

  build: {
    target: ["es2022", "chrome89", "firefox89", "safari15"],
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        nestedTwo: resolve(__dirname, "src/movies-shows.html"),
        nestedFour: resolve(__dirname, "src/movies.html"),
        nestedFive: resolve(__dirname, "src/shows.html"),
        nestedSix: resolve(__dirname, "src/support.html"),
        nestedSeven: resolve(__dirname, "src/subscription.html"),
      },
    },
    outDir: "../dist",
  },
  plugins: [injectHTML(), FullReload(["./src//.html"])],
});
