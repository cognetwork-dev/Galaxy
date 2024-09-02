import { ChemicalServer } from "chemicaljs";
import express from "express";

const [app, listen] = new ChemicalServer({
    scramjet: false,
    meteor: false,
    rammerhead: false,
});
const port = process.env.PORT || 4000;

app.use(
    express.static("build", {
        index: "index.html",
        extensions: ["html"],
    })
);

app.serveChemical();

app.use((req, res) => {
    res.status(404);
    res.sendFile(import.meta.dirname + "/build/404.html");
});

listen(port, () => {
    console.log(`Galaxy listening on port ${port}`);
});
