const express = require("express");
const app = express();
const port = 1919;
const mongoose = require("mongoose");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.get("/", (req, res) => {
    res.send("index.html");
});
mongoose.connect("mongodb://localhost:27017/pointingapp", {
    useNewUrlParser: true,
});
var userSchema = new mongoose.Schema({
    Username: {
        type: String,
    },
});
var User = mongoose.model("user", userSchema);
app.post("/save", (req, res) => {
    const obj = req.body;

    console.log(obj);
    User.create({
        Username: req.body.Username,
    });
    res.redirect("./");
});

app.listen(port);
// app.post("/save", (req, res) => {
//     console.log("Employee Name : ",
//         req.body.Username)
//     res.redirect("./index.html");
// });