const express = require("express");
const ejs = require("ejs");
const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});



app.get('/Menu', function(req, res) {
  res.render('../views/Menu.ejs');
});

app.get('/Order', function(req, res) {
  res.render('../views/Order.ejs');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
