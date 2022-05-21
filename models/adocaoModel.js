export default (mongoose) => {
  const schemaAdocao = mongoose.Schema({
    idAnimal: {
      type: Number,
      required: true,
    },
    idUsuario: {
      type: Number,
      required: true,
    },
    dataAdocao: {
      type: Date,
      required: true,
    },
    statusAdocao: {
      type: String,
      required: true,
    },
  }, { collection: "Adocao" });

  const adocaoModel = mongoose.model('Adocao', schemaAdocao);

  return adocaoModel;
};
