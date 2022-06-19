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
      type: Number,
      required: false,
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
    animalDescription: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: false,
    },
    availability: {
      type: Boolean,
      required: false,
    },
  });

  const AnimalModel = mongoose.model('Animal', animalSchema);

  return AnimalModel;
};
