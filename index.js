const express = require("express");
const app = express();

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}`);
});
