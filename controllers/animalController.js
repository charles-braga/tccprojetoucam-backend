import { db } from '../models/index.js';

const Animal = db.animal;

const createAnimal = async (req, res) => {
  const { body } = req;

  //console.log(body);

  try {
    if (JSON.stringify(body) === '{}') {
      throw new Error('Conteúdo inexistente');
    }

    //prettier-ignore
    const { animalName, animalDescription, animalType, animalGender, animalAge, animalSize, animalBreed, animalTemperament, animalVaccines, picture, availability } = body;

    const animal = new Animal({
      animalName,
      animalDescription,
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

    //console.log(animal);

    await animal.save(animal);

    res.send({ message: 'Animal cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Erro ao gerar o cadastro do animal.',
    });
  }
};

//função FIND
const findAllAnimals = async (_, res) => {
  try {
    const queryAnimals = await Animal.find({});

    res.send(queryAnimals);

  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        'Erro ao listar os animais cadastrados.',
    });
  }
};


export default {
  createAnimal,
  findAllAnimals
};