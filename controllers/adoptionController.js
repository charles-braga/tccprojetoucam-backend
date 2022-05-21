import { db } from '../models/index.js';

const Adocao = db.adocao;

const create = async (req, res) => {
  const { body } = req;

  console.log(body);

  try {
    if (JSON.stringify(body) === '{}') {
      throw new Error('Conteúdo inexistente');
    }

    //prettier-ignore
    const { idAnimal, idUsuario, dataAdocao, statusAdocao } = body;

    const adocao = new Adocao({
      idAnimal,
      idUsuario,
      dataAdocao,
      statusAdocao,
    });

    console.log(adocao);

    await adocao.save(adocao);

    res.send({ message: 'Novo lançamento salvo com sucesso!' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Erro ao salvar o novo lançamento.',
    });
  }
};

const findAll = async (req, res) => {
  try {
    const adoptions = await Adocao.findAll();

    const mappedAdoptions = adoptions.map((adoption) => adoption.get({ plain: true }));
    res.send(mappedAdoptions);
    console.log(mappedAdoptions);
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        'Erro ao listar os lançamentos para o periodo solicitado.',
    });
  }
};

export default {
  create,
  findAll
};