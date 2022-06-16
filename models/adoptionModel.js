
export default (mongoose) => {
  const adoptionSchema = mongoose.Schema({
    animalName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    year: Number,
    month: Number,
    day: Number,
    yearMonth: String,
    yearMonthDay: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  });

  const AdoptionModel = mongoose.model('adoption', adoptionSchema);

  return AdoptionModel;
};
