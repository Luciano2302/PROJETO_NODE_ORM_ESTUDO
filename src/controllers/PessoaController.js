const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller{ 
  constructor(){
    super(pessoaServices);
  }

  async pegarMatriculaAtivas(req, res){
    const {estudante_id} = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculaAtivasPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }

  async pegaTodasAsMatriculas(req, res){
    const {estudante_id} = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaTodasAsMatriculaPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }

  async pegaTodasAsPessoas(req, res){
    try {
      const listaTodasAsPessoas = await pessoaServices.pegaPessoasEscopoTotos();
      return res.status(200).json(listaTodasAsPessoas);
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }


  async cancelaRegistroEstudante(req, res){
    const { estudante_id } = req.params;
    
    try {
      await pessoaServices.cancelaPessoaEMatriculas(Number(estudante_id));
      return res.status(200).json({message: `matricula ref. estudante ${estudante_id} canceladas.`});
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }

}
module.exports = PessoaController;