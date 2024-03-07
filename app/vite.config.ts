import { defineConfig } from "vite";

// Plugins
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    watch: {
      usePolling: true,
    },
    hmr: { host: "0.0.0.0" },
  },
});
