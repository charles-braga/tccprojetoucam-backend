import express from 'express';
import animalController from '../controllers/animalController.js';

const {
  createAnimal,
  findAllAnimals,

} = animalController;
// chamando express 
const animalApp = express();

// criando novo cadastro de animal
animalApp.post('/animal', createAnimal);

// lendo todas os animais cadastrados
animalApp.get('/animal', findAllAnimals);

export { animalApp as animalRouter };