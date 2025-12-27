const dataSource = require('../db/models/index.cjs');

class Services {
  constructor(model) {
    this.model = model;
  }

  async pegaTodosOsRegistros (where = {}) {
    return this.model.findAll({ where: {...where }});
  }

  async pegaRegistrosPorEscopo(scope) {
    return this.model.scope(scope).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return this.model.findByPk(id);
  }

  async pegaUmRegistro(where) {
    return this.model.findOne({ where: {...where }});
  }

  async pegaEContaRegistros(options) {
    return this.model.findAndCountAll({...options });
  }

  async criaRegistro(dadosDoRegistro) {
    return this.model.create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, where, transacao = {}) {
    const listadeRegistrosAtualizados = await this.model
    .update(dadosAtualizados, {
      where: { ...where},
      transaction: transacao
    });
    if (listadeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return listadeRegistrosAtualizados;
  }

  async excluiRegistro(where) {
    return this.model.destroy({ where: { ...where },
      transaction
     });
  }
}

module.exports = Services;