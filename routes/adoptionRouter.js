import express from 'express';
import adoptionController from '../controllers/adoptionController.js';

const {
  create,
  findAll

} = adoptionController;
// chamando express 
const adoptionApp = express();

// criando novo cadastro de adoção
adoptionApp.post('', create);

// lendo todas as adoções
adoptionApp.get('', findAll);

export { adoptionApp as adoptionRouter };