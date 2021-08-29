const User = require("../models/User");

module.exports = {
  async createUser(req, res) {
    const { cargo, cpf, nome, uf_nascimento, salario } = req.body;

    if (!cargo | !cpf | !nome | !uf_nascimento | !salario) {
      return res.json({
        Erro: "Todos os campos são obrigatórios",
        Campos: "cargo, cpf, nome, uf_nascimento, salario",
      });
    }

    const user = await User.create({
      cargo,
      cpf,
      nome,
      uf_nascimento,
      salario,
      status: "ATIVO",
    });

    return res.json(user);
  },

  async listUsers(_, res) {
    const users = await User.findAll();

    return res.json(users);
  },
};
