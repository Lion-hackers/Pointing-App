const express = require("express");
const app = express();
const port = 1919;
app.use(express.static("public"));
app.use(express.json());
app.get("/", (req, res) => {
    console.log("server running on port " + port)
    res.send("index.html");
});
app.listen(port);