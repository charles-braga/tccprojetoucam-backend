export default (mongoose) => {
  const donateSchema = mongoose.Schema({
    product: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    userName: {
      type: String,
      required: true,

    },
    date: {
      type: Date,
      default: Date.now,
      required: false,

    },
  });

  const DonateModel = mongoose.model('donation', donateSchema);

  return DonateModel;
};
