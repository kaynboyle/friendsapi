const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// speicfy rtypes to accept as request these are body parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);


db.once("open", () => {
  app.listen(PORT, () => {
    console.log("Welcome you are connected! on this PORT: " + PORT);
  });
});
