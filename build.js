import { copyFile, mkdir } from "node:fs/promises";

const buildURL = new URL("./build/", import.meta.url);
const indexURL = new URL("index.html", buildURL);

const files = [
    "options.html",
    "contributers.html",
    "privacy.html",
    "404.html",
];

for (const file of files) {
    const output = new URL(file, buildURL);

    try {
        await mkdir(new URL(".", output), { recursive: true });
    } catch (err) {
        if (err?.code !== "EEXIST") throw err;
    }

    try {
        await copyFile(indexURL, output);
        console.log(output.href);
    } catch (err) {
        if (err?.code !== "EEXIST") throw err;
    }
}
