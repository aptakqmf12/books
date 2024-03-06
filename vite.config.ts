import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@component",
        replacement: path.resolve(__dirname, "src/component"),
      },
      {
        find: "@api",
        replacement: path.resolve(__dirname, "src/api"),
      },
      {
        find: "@type",
        replacement: path.resolve(__dirname, "src/type"),
      },
    ],
  },
});
