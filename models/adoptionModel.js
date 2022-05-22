
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
    adoptionDate: {
      type: Date,
      default: Date.now,
      required: false,
    },
    status: {
      type: String,
      required: true,
    },
  });

  const AdoptionModel = mongoose.model('adoption', adoptionSchema);

  return AdoptionModel;
};
