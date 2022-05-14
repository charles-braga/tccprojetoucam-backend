export default (mongoose) => {
  const schemaAnimal = mongoose.Schema({
    idAnimal: {
      type: Number,
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
      type: String,
      required: true,
    },
    porteAnimal: {
      type: String,
      required: true,
    },
    racaAnimal: {
      type: String,
      required: false,
    },
    temperamentoAnimal: {
      type: String,
      required: true,
    },
    vacinasAnimal: {
      type: Boolean,
      required: false,
    },
    fotoAnimal: {
      type: String,
      required: true,
    },
    disponibilidade: {
      type: String,
      required: true,
    },
  });

  const animalModel = mongoose.model('Animal', schemaAnimal);

  return animalModel;
};
