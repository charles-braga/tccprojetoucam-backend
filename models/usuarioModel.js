export default (mongoose) => {
  const schemaUsuario = mongoose.Schema({
    nomeUsuario: {
      type: String,
      required: true,
    },
    senhaUsuario: {
      type: double,
      required: true,
    },
    emailUsuario: {
      type: String,
      required: true,
    },
    datanascUsuario: {
      type: date,
      required: true,
    },
    telefoneUsuario: {
      type: String,
      required: true,
    },
    enderecoUsuario: {
      type: String,
      required: true,
    },
    tipoUsuario: {
      type: String,
      required: true,
    },
  });

  const usuarioModel = mongoose.model('Usuario', schemaUsuario);

  return usuarioModel;
};
