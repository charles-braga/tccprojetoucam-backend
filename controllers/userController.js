import { db } from '../models/index.js';

const User = db.user;

const create = async (req, res) => {
  const { body } = req;

  console.log(body);

  try {
    if (JSON.stringify(body) === '{}') {
      throw new Error('Conteúdo inexistente');
    }

    //prettier-ignore
    const { name, password, email, birthDate, contact, address, userType } = body;

    const user = new User({
      name,
      password,
      email,
      birthDate,
      contact,
      address,
      userType
    });

    console.log(user);

    await user.save(user);

    res.send({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Erro ao gerar o cadastro.',
    });
  }
};



export default {
  create,
  //findAll
};