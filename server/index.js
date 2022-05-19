const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api", (req, res) => {
  console.log(req);
  res.json({ message: "Hola" });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
