const Services = require('./Services.js');

class PessoaServices  extends Services{
  constructor(){
    super('Pessoa');
  }

  async pegaMatriculaPorEstudante(id){
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getAulasMatriculas();
    return listaMatriculas;
  }

  async pegaPessoasEscopoTotos(){
    const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
    return  listaPessoas;
  }

}

module.exports = PessoaServices;