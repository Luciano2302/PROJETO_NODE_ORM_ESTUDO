const Services = require('./Services.js');

class PessoaServices  extends Services{
  constructor(){
    super('Pessoa');
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

}

module.exports = PessoaServices;