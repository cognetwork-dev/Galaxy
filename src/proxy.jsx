export const swSupported = navigator.serviceWorker !== undefined;

if (swSupported) {
  navigator.serviceWorker.register(new URL("/ultra-sw.js", window.location), {
    scope: __uv$config.prefix,
  });
}