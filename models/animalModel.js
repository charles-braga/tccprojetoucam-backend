export default (mongoose) => {
  const schemaAnimal = mongoose.Schema({
    idAnimal: {
      type: number,
      required: true,
    },
    tipoAnimal: {
      type: Boolean,
      required: true,
    },
    sexoAnimal: {
      type: Boolean,
      required: true,
    },
    idadeAnimal: {
      type: string,
      required: true,
    },
    porteAnimal: {
      type: string,
      required: true,
    },
    racaAnimal: {
      type: string,
      required: false,
    },
    temperamentoAnimal: {
      type: string,
      required: true,
    },
    vacinasAnimal: {
      type: Boolean,
      required: false,
    },
    fotoAnimal: {
      type: string,
      required: true,
    },
    disponibilidade: {
      type: string,
      required: true,
    },
  });

  const animalModel = mongoose.model('Animal', schemaAnimal);

  return animalModel;
};
