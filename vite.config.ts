import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import dotenv from "dotenv";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => {
  dotenv.config({ path: "./ .env.local" });

  return {
    build: {
      outDir: "build",
    },
    plugins: [
      react(),
      eslint(),
      VitePWA({
        devOptions: {
          enabled: true,
        },
        injectRegister: "auto",
        registerType: "autoUpdate",
        strategies: "injectManifest",
        injectManifest: {
          injectionPoint: undefined,
        },
      }),
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/setup.ts",
    },
  };
});
