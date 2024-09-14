import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/static",
  build: {
    outDir: "build",
    emptyOutDir: true,
    //
    // rollupOptions: {
    //   output: {
    //     assetFileNames: (assetInfo) => {
    //       let extType: any = assetInfo.name?.split(".").pop();
    //       if (/js|css|html/.test(extType)) {
    //         return `assets/[name].[hash][extname]`; // Keep assets in the default assets folder
    //       }
    //       return `static/[name].[hash][extname]`; // Change assets to go to the static folder
    //     },
    //     chunkFileNames: "static/[name].[hash].js",
    //     entryFileNames: "static/[name].[hash].js",
    //   },
    // },
  },
});
