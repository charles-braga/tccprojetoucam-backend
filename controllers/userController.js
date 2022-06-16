import { db } from '../models/index.js';

const User = db.user;

const create = async (req, res) => {
  const { body } = req;

  //console.log(body);

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

    //console.log(user);

    await user.save(user);

    res.send({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Erro ao gerar o cadastro.',
    });
  }
};

const updateUser = async (req, res) => {
  const { body, params } = req;
  const { _id } = params;

  try {
    if (JSON.stringify(body) === '{}') {
      throw new Error('Conteúdo inexistente');
    }

    if (body.birthDate) {
      const date = body.birthDate;
      const resultDate = date.split("/", 3);
      const [ano, mes, dia] = resultDate;

      const editedUser = {
        ...body,
        year: ano,
        month: mes,
        day: dia,
        birthDate: `${dia}/${mes}/${ano}`,
      };

      //console.log(editedUser);

      const editUser = await User.findByIdAndUpdate(
        { _id: _id },
        editedUser,
        { new: true }
      );

      res.send(editUser, { message: 'Usuário atualizado com sucesso!' });
    } else {
      const editUser = await User.findByIdAndUpdate(
        { _id: _id },
        req.body,
        { new: true }
      );

      res.send(editUser);
    }

  } catch (error) {
    res.status(500).send({
      message: error.message || `Erro ao atualizar o lançamento. `,
    });
  }
};

const FindAllUsers = async (_, res) => {

  try {

    const findAllUsers = await User.find({});
    res.send(findAllUsers);

  } catch (error) {

    res.status(500).send({
      message:
        error.message ||
        'Erro ao listar os usuários.',
    });

  }
};

const deleteUser = async (req, res) => {
  const { _id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete({ _id: _id });
    res.send({ message: 'Lançamento excluído com sucesso' });
  } catch (err) {
    res.status(500).send({
      message:
        err.message ||
        `Não foi possível deletar usuário: ${id}`,
    });
  }
};


export default {
  create,
  updateUser,
  FindAllUsers,
  deleteUser,
};