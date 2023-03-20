const express = require("express");
const app = express();

const path = require("path");
const PORT = process.env.PORT || 3000;

// - Handler funciton - //

// -- End points - - //
app.get("/", (req, res) => {
  //console.log(req);
  res.send("test and test ");
});

app.get("/node", function (req, res) {
  res.send("iam node");
});

app.get("/codeyourfuture", function (req, res) {
  res.send("learn to code");
});
// -- Query parameters - - //
// - - exercise 1 - - //
app.get("/searchtest1", function (req, res) {
  //console.log(req);
  let searchQuery = req.query.dog;
  console.log(req.query);
  res.send("Hello World! You searched for " + searchQuery);
});

app.get("/chocolate", function (req, res) {
  let seachTerm = req.query.amount;
  res.send(`i want ${seachTerm} choclates`);
});
// - - exercise 2 multipl prams - - //
app.get("/json", function (req, res) {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});
app.get("/multiply", function (req, res) {
  let val1 = req.query.value1;
  let val2 = req.query.value2;
  let toNumb = (numb) => parseInt(numb);
  console.log("testing");
  //res.send(`the total number is  ${+val1 + +val2}`);
  res.send(`the total number is  ${toNumb(val1) + toNumb(val2)}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}. Ready to accept requests!`);
});
