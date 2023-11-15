import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import dotenv from "dotenv";
import { defineConfig } from "vite";

export default defineConfig(() => {
  dotenv.config({ path: "./ .env.local" });

  return {
    build: {
      outDir: "build",
    },
    plugins: [react(), eslint()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/setup.ts",
    },
  };
});
