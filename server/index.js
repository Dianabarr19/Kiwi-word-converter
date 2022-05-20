const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const result = require("./get_results");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api", (req, res) => {
  const combinations = result.calculateResult(req.body.data).join(" ");
  res.send(combinations);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
