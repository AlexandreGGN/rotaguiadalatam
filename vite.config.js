import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  server: {
    host: true,
  port: 5173,
  open: false,
  strictPort: true,
  allowedHosts: "all",
  cors: true,
  headers: {
      "Access-Control-Allow-Origin": "*",
    },
  proxy: {
      "/js": { target: "http://localhost:5173", changeOrigin: true },
      "/css": { target: "http://localhost:5173", changeOrigin: true },
      "/images": { target: "http://localhost:5173", changeOrigin: true },
      "/fonts": { target: "http://localhost:5173", changeOrigin: true },
    },
  },
  build: {
    outDir: "dist",
  copyPublicDir: true,
  rollupOptions: {
      input: "index.html",
    },
  },
  appType: "mpa",
  optimizeDeps: { exclude: [] },
});
