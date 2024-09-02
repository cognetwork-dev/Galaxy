import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import solidSvg from "vite-plugin-solid-svg";
import { ChemicalVitePlugin } from "chemicaljs";

export default defineConfig({
    server: {
        port: 3000,
    },
    appType: "mpa",
    build: {
        target: "esnext",
        outDir: "./build",
    },
    plugins: [
        ChemicalVitePlugin({
            scramjet: false,
            meteor: false,
            rammerhead: false,
        }),
        solidPlugin(),
        ViteMinifyPlugin(),
        solidSvg(),
    ],
});
