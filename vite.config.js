import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "ttmfe-subscribe-form",
      filename: "remoteEntry.js",
      exposes: {
        "./subscribe-form": "./src/components/subscribe-form.jsx",
        "./store": "./src/store.js",
      },
      shared: ["react", "react-dom", "tailwindcss", "jotai"],
    }),
  ],
  build: {
    target: "esnext", // or 'es2022'
  },
});
