import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: parseInt(process.env.npm_config_port),
  },
  plugins: [
    visualizer({ open: true }),
    react(),
    VitePWA({
      workbox: {
        maximumFileSizeToCacheInBytes: 5500000, // Set to 4MB or any higher value
      },
      manifest: {
        name: "Muuyal",
        short_name: "Muuyal",
        start_url: "./",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
        description: "PWA install handler package for Muuyal",
        icons: [
          {
            src: "https://res.cloudinary.com/dtkeyccga/image/upload/v1738755436/Untitled_design_60_e6ci5u.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "https://res.cloudinary.com/dtkeyccga/image/upload/v1738755436/Untitled_design_60_e6ci5u.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "https://res.cloudinary.com/dtkeyccga/image/upload/v1738755436/Untitled_design_60_e6ci5u.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
  ],
  base: "/",
});
