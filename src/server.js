const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    "Fulton has completed the CS335 final and I now know what a container is",
  );
});

app.listen(3000, function () {
  console.log("app listening on port 3000");
});
