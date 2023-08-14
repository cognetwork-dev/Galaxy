import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { createBareServer } from "@tomphttp/bare-server-node";
import solidSvg from 'vite-plugin-solid-svg';

export default defineConfig({
  server: {
    port: 3000,
  },
  appType: "mpa",
  build: {
    target: 'esnext',
    outDir: './build'
  },
  plugins: [
        {
            name: "bare server",
            configureServer(server) {
                const bare = createBareServer("/bare/");
                server.middlewares.use((req, res, next) => {
                    if (bare.shouldRoute(req)) bare.routeRequest(req, res);
                    else next();
                });

                const upgraders = server.httpServer.listeners(
                    "upgrade"
                )

                // remover other listeners
                for (const upgrader of upgraders)
                    server.httpServer.off("upgrade", upgrader);

                server.httpServer.on("upgrade", (req, socket, head) => {
                    if (bare.shouldRoute(req))
                        bare.routeUpgrade(req, socket, head);
                    else
                        for (const upgrader of upgraders)
                            upgrader(req, socket, head);
                });
            },
        },
        solidPlugin(),
        ViteMinifyPlugin(),
        solidSvg(),
    ],
});
