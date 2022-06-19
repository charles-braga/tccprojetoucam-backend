
export default (mongoose) => {
  const adoptionSchema = mongoose.Schema({
    animalID: {
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
      required: false,
    },
  });

  const AdoptionModel = mongoose.model('adoption', adoptionSchema);

  return AdoptionModel;
};
