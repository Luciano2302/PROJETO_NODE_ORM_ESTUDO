const MatriculaServices = require('./MatriculaServices.js');
const Services = require('./Services.js');
const dataSource = require('../database/models');

class PessoaServices  extends Services{
  constructor(){
    super('Pessoa');
    this.matriculaService = new MatriculaServices();
  }

  async pegaMatriculaAtivasPorEstudante(id){
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async pegaTodasAsMatriculaPorEstudante(id){
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getTodasAsMatriculadas();
    return listaMatriculas;
  }

  async pegaPessoasEscopoTotos(){
    const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
    return  listaPessoas;
  }

  async cancelaPessoaEMatriculas(estudante_id){
    return dataSource.sequelize.transaction(async (transacao) => {
      await super.atualizaRegistros({ativo: false}, {id: estudante_id}, transacao);
      await this.matriculaService.atualizaRegistros({status: 'cancelado'}, {estudante_id: estudante_id}, transacao);
    });
  }

} 

module.exports = PessoaServices;