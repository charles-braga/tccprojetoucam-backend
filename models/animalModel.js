export default (mongoose) => {
  const animalSchema = mongoose.Schema({
    animalName: {
      type: String,
      required: true,
    },
    animalType: {
      type: String,
      required: true,
    },
    animalGender: {
      type: String,
      required: true,
    },
    animalAge: {
      type: String,
      required: true,
    },
    animalSize: {
      type: String,
      required: true,
    },
    animalBreed: {
      type: String,
      required: false,
    },
    animalTemperament: {
      type: String,
      required: true,
    },
    animalVaccines: {
      type: Array,
      required: false,
    },
    picture: {
      type: String,
      required: true,
    },
    availability: {
      type: Boolean,
      required: true,
    },
  });

  const AnimalModel = mongoose.model('Animal', animalSchema);

  return AnimalModel;
};
