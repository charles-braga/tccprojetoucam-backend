import express from 'express';
import donateController from '../controllers/donateController.js';

const {
  create,
  //findAll

} = donateController;
// chamando express 
const donateApp = express();

// criando novo cadastro de adoção
donateApp.post('/donate', create);

// lendo todas as adoções
//userApp.get('', findAll);

export { donateApp as donateRouter };