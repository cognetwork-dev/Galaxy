navigator.serviceWorker.register(new URL("/uv-sw.js", window.location), {
    scope: __uv$config.prefix,
});

navigator.serviceWorker.register(new URL("/dynamic-sw.js", window.location), {
    scope: __dynamic$config.prefix,
});