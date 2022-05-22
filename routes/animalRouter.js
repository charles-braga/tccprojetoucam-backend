import express from 'express';
import animalController from '../controllers/animalController.js';

const {
  create,
  //findAll

} = animalController;
// chamando express 
const animalApp = express();

// criando novo cadastro de adoção
animalApp.post('/animal', create);

// lendo todas as adoções
//userApp.get('', findAll);

export { animalApp as animalRouter };