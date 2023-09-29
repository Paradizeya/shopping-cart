import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shopping-cart/",
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@styles": "/src/styles",
      "@components": "/src/components",
      "@stores": "/src/stores",
    },
  },
});
