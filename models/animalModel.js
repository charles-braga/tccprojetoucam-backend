export default (mongoose) => {
  const animalSchema = mongoose.Schema({
    animalType: {
      type: Boolean,
      required: true,
    },
    animalGender: {
      type: Boolean,
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
      type: Boolean,
      required: false,
    },
    picture: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
  });

  const AnimalModel = mongoose.model('Animal', animalSchema);

  return AnimalModel;
};
