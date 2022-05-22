import express from 'express';
import userController from '../controllers/userController.js';

const {
  create,
  //findAll

} = userController;
// chamando express 
const userApp = express();

// criando novo cadastro de adoção
userApp.post('', create);

// lendo todas as adoções
//userApp.get('', findAll);

export { userApp as userRouter };