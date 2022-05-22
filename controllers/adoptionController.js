import { db } from '../models/index.js';

const Adoption = db.adoption;

const create = async (req, res) => {
  const { body } = req;

  console.log(body);

  try {
    if (JSON.stringify(body) === '{}') {
      throw new Error('Conteúdo inexistente');
    }

    //prettier-ignore
    const { animalId, userId, status } = body;

    const adoption = new Adoption({
      animalId,
      userId,
      status,
    });

    console.log(adoption);

    await adoption.save(adoption);

    res.send({ message: 'Adoção realizada com sucesso!' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Erro ao salvar a adoção.',
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
        'Erro!.',
    });
  }
};

export default {
  create,
  findAll
};