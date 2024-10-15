const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const ejsMate = require("ejs-mate");

const productRoute = require("./routes/products.js");

app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect("/products");
});

app.use("/products", productRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
