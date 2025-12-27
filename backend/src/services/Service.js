import dataSource from '../db/models';

class Services {
  constructor(modelName) {
    this.model = modelName;
  } 

  async pegaTodosOsRegistros (where = {}) {
    return dataSource[this.model].findAll({ where: {...where }});
  }

  async pegaRegistrosPorEscopo(scope) {
    return dataSource[this.model].scope(scope).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async pegaUmRegistro(where) {
    return dataSource[this.model].findOne({ where: {...where }});
  }

  async pegaEContaRegistros(options) {
    return dataSource[this.model].findAndCountAll({...options });
  }

  async criaRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, where, transacao = {}) {
    const listadeRegistrosAtualizados = await dataSource[this.model]
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
    return dataSource[this.model].destroy({ where: { ...where },
      transaction
     });
  }
}

module.exports = Services;