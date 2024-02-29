class Controller {
  constructor(entidadeSerivce){
    this.entidadeSerivce = entidadeSerivce;
  }

  async pegaTodos(req, res){
     try {
        const listaDeRegistros = await this.entidadeSerivce.pegaTodosOsRegistros();
        return res.status(200).json(listaDeRegistros);
     } catch (error) {
       //erro 
     }
  }


  async atualiza(req, res){
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
       const foiAtualizado = await this.entidadeSerivce.atualizaRegistros(dadosAtualizados, Number(id));
       if(!foiAtualizado){
        return res.status(400).json({mensagem: 'registro não foi atualizado'});
       }
       return res.status(200).json({mensagem: 'registro atualizado com sucesso'});
    } catch (error) {
        return res.status(400).json({erro: error.message});
    }
  }
}

module.exports = Controller;