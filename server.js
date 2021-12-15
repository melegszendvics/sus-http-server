require("dotenv").config()

const express = require("express")
const app = express() 
app.use(express.static(__dirname+"/views"));

app.get("/", (req, res) => {
    res.render("index.ejs");
    //res.send("<html><body><style>.par{color: red;}</style><p class=\"par\">desbord</p></body></html>")
})

app.get("/igen", (req, res) => {
    res.send("<html><body><p>őőigen</p></body></html>")
})

app.get("/nem", (req, res) => {
    res.send("<html><body><p>őőőőőőnem</p></body></html>")
})

app.listen(process.env.PORT)