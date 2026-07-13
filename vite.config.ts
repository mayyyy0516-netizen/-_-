import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

declare const process: { env: Record<string, string | undefined> };

export default defineConfig({
  // GitHub Pages 使用仓库子路径；Cloudflare 和本地环境继续使用根路径。
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react(), tailwindcss()],
});
