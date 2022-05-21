import express from 'express';
import controller from '../controllers/adoptionController.js';

const {
  create,
  findAll

} = controller;
// chamando express 
const adoptionApp = express();

// criando novo cadastro de adoção
adoptionApp.post('', create);

// lendo todas as adoções
adoptionApp.get('', findAll);

export { adoptionApp as adoptionRouter };