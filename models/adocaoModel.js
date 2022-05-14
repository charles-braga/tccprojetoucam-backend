export default (mongoose) => {
  const schemaAdocao = mongoose.Schema({
    idAnimal: {
      type: number,
      required: true,
    },
    idUsuario: {
      type: number,
      required: true,
    },
    dataAdocao: {
      type: date,
      required: true,
    },
    statusAdocao: {
      type: string,
      required: true,
    },
  });

  const adocaoModel = mongoose.model('Adocao', schemaAdocao);

  return adocaoModel;
};
