// This file configures a web server for testing the production build
// on your local machine.

import compression from "compression";
import express from "express";
import path from "path";

let app = express();
app.set("port", 3000);
app.use(compression());

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(app.get("port"), () =>  {
  /* eslint-disable no-console */
  console.log("Running production build...");
});
