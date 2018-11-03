const api = require("../api");

module.exports = {
  async index(req, res) {
    const categoria = req.params.id;
    const publicacoes = await api.list(`publicacoes/${categoria}`);
    res.render("publicacoes/index", { publicacoes, categoria });
  },
  async create(req, res) {
    const categorias = await api.list("categorias");
    res.render("publicacoes/nova", { categorias });
  },
  async store(req, res) {
    await api.post(`publicacoes/${req.body.categoria}`, {
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
    });
    res.redirect("/publicacoes/categoria/" + req.body.categoria);
  },
  async edit(req, res) {
    const categoria = req.params.categoria;
    const publicacoes = await api.get(
      `publicacoes/${categoria}`,
      req.params.id
    );
    res.render("publicacoes/editar", {
      publicacoes,
      categoria
    });
  },
  async update(req, res) {
    await api.update(`publicacoes/${req.params.categoria}`, req.params.id, {
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
    });
    res.redirect("/publicacoes/categoria/" + req.params.categoria);
  },
  async destroy(req, res) {
    await api.apagar(`publicacoes/${req.params.categoria}`, req.params.id);
    res.redirect("/publicacoes/categoria/" + req.params.categoria);
  }
};
