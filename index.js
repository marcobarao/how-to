const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded());

const categoriasRoute = require("./routes/categorias.route");

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.use("/categorias", categoriasRoute);

app.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}`);
});
