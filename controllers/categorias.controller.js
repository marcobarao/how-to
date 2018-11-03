const api = require("../api");

module.exports = {
  async index(req, res) {
    const categorias = await api.list("categorias");
    res.render("categorias/index", { categorias });
  },
  async create(req, res) {
    res.render("categorias/nova");
  },
  async store(req, res) {
    await api.post("categorias", req.body);
    res.redirect("/categorias");
  },
  async edit(req, res) {
    const categoria = await api.get("categorias", req.params.id);
    res.render("categorias/editar", {
      categoria
    });
  },
  async update(req, res) {
    await api.update("categorias", req.params.id, req.body);
    res.redirect("/categorias");
  },
  async destroy(req, res) {
    await api.apagar("categorias", req.params.id);
    await api.apagar("publicacoes/", req.params.id);
    res.redirect("/categorias");
  }
};
