import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let today = [];
let work = [];

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index.ejs", {
    today: today,
  });
});

app.post("/", function (req, res) {
  if (req.body["task"]) {
    today.push(req.body["task"]);
  }
  res.render("index.ejs", {
    today: today,
  });
});

app.get("/work", function (req, res) {
  res.render("work.ejs", {
    work: work,
  });
});

app.post("/work", function (req, res) {
  if (req.body["task"]) {
    work.push(req.body["task"]);
  }
  res.render("work.ejs", {
    work: work,
  });
});

// Add a post request to work and to home, so that you have 2 todo lists

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
