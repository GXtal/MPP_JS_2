const express = require("express");

const app = express();

app.get("/api", (req, res) => {
    console.log('ssss');
    res.json({ "names": ["ex", "sah", "th"] });
});

app.listen(5000, () => { console.log("started on 5000") });