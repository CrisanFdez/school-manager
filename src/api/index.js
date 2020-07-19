const express = require("express");
const app = express();

app.use(require("./courses/routes"));
app.use(require("./students/routes"));
app.use(require("./teachers/routes"));

module.exports = app;
