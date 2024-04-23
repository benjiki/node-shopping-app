const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const notfound404 = require("./controllers/error");
const app = express();

// app.set("view engine", "pug");

app.set("view engine", "ejs");

app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false })); // for parsing JSON in the request body
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

const server = http.createServer(app);

app.use(notfound404.get404Page);

server.listen(3000);
