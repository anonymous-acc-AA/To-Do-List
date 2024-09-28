const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "styles")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
let tasks = [];

app.get("/", (req, res) => {
  res.render("index", { tasks });
});

app.post("/", (req, res) => {
  // Add logic
});

function clearArray() {
  tasks = [];
}

app.post("/del", async (req, res) => {
  await clearArray();
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Listening to the server");
});
