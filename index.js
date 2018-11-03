const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded());

const categoriasRoute = require("./routes/categorias.route");
const publicacoesRoute = require("./routes/publicacoes.route");

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.use("/categorias", categoriasRoute);
app.use("/publicacoes", publicacoesRoute);
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}`);
});
