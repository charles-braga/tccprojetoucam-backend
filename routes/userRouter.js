import express from 'express';
import userController from '../controllers/userController.js';

const {
  create,
  updateUser,
  FindAllUsers,
  deleteUser
} = userController;

// chamando express 
const userApp = express();

// criando novo cadastro de adoção
userApp.post('/user', create);

//PATCH atualizando lançamento por id.
userApp.patch('/user/:_id', updateUser);

//Carregando usuários cadastrados.
userApp.get('/user', FindAllUsers);

//Deletando usuários cadastrados.
userApp.delete('/user/:_id', deleteUser);


export { userApp as userRouter };