const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.set("view engine", "pug");

app.set("view engine", "ejs");

app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false })); // for parsing JSON in the request body
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

const server = http.createServer(app);

app.use(function (req, res) {
  //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "page Not found!!!" });
});

server.listen(3000);
