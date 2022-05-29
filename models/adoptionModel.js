
export default (mongoose) => {
  const adoptionSchema = mongoose.Schema({
    animalId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
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
