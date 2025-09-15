import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 👈 this line enables "@/..."
    },
  },
  optimizeDeps: {
    include: [
      "recharts",
      "react-simple-maps",
      "d3-geo",
      "topojson-client",
      "prop-types",
      "react-is",
    ],
    force: true,
  },
});
