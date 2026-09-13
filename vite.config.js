import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: "all",
  },
  build: {
    outDir: "dist",
  copyPublicDir: true,
  rollupOptions: {
      input: "index.html",
    },
  },
  appType: "mpa",
});
