import { db } from '../models/index.js';

const Animal = db.animal;

const create = async (req, res) => {
  const { body } = req;

  console.log(body);

  try {
    if (JSON.stringify(body) === '{}') {
      throw new Error('Conteúdo inexistente');
    }

    //prettier-ignore
    const { animalType, animalGender, animalAge, animalSize, animalBreed, animalTemperament, animalVaccines, picture, availability } = body;

    const animal = new Animal({
      animalType,
      animalGender,
      animalAge,
      animalSize,
      animalBreed,
      animalTemperament,
      animalVaccines,
      picture,
      availability
    });

    console.log(animal);

    await animal.save(animal);

    res.send({ message: 'Animal cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Erro ao gerar o cadastro do animal.',
    });
  }
};



export default {
  create,
  //findAll
};