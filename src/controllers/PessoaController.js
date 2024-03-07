const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller{ 
  constructor(){
    super(pessoaServices);
  }

  async pegarMatricula(req, res){
    const {estudanteId} = req.params;
    try {
     const listaMatriculas = await pessoaServices.pegaMatriculaPorEstudante(Number(estudanteId));
     return res.status(200).json(listaMatriculas);
    } catch (error) {
  
    }
  }

}
module.exports = PessoaController;