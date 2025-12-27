import converteIds from '../utils/conversorDeStringHelper.js';

class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  // Pega todos os registros
  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  // Pega um registro por ID
  async pegaUmPorId(req, res) {
    const params = req.params;
    const where = converteIds(params); // converte todos os IDs da rota
    const id = Object.values(where)[0]; // pega o primeiro valor (assumindo que a rota tem só 1 ID)
    
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido' });
    }

    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(id);
      if (!umRegistro) return res.status(404).json({ erro: 'Registro não encontrado' });
      return res.status(200).json(umRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  // Pega um registro por campos
  async pegaUm(req, res) {
    const where = converteIds(req.params);
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistro(where);
      if (!umRegistro) return res.status(404).json({ erro: 'Registro não encontrado' });
      return res.status(200).json(umRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  // Cria um novo registro
  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(200).json(novoRegistroCriado);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  // Atualiza registro
  async atualiza(req, res) {
    const where = converteIds(req.params);
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, where);
      if (!foiAtualizado) return res.status(400).json({ mensagem: 'Registro não foi atualizado' });
      return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  // Exclui registro
  async exclui(req, res) {
    const where = converteIds(req.params);
    const id = Object.values(where)[0]; // pega o primeiro ID
    if (isNaN(id)) return res.status(400).json({ erro: 'ID inválido' });

    try {
      const deletado = await this.entidadeService.excluiRegistro(where);
      if (!deletado) return res.status(404).json({ mensagem: 'Registro não encontrado' });
      return res.status(200).json({ mensagem: `ID ${id} deletado` });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

export default Controller;
