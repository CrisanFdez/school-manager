const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { port, host } = require("./config");

const app = express();

//Middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());

//Routes
app.use(require("./api"));

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
  console.log("Environment:", port);
});
