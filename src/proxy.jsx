navigator.serviceWorker.register(new URL("/dynamic-sw.js", window.location), {
    scope: __dynamic$config.prefix,
});