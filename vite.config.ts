import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      _src: "/src",
      _styles: "/src/styles",
      _components: "/src/components",
      _stores: "/src/stores",
    },
  },
});
