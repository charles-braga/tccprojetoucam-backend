import { db } from '../models/index.js';

const Adoption = db.adoption;

const create = async (req, res) => {
  const { body } = req;

  try {
    if (JSON.stringify(body) === '{}') {
      throw new Error('Conteúdo inexistente');
    }

    //prettier-ignore
    const { animalID, userName, yearMonthDay } = body;

    const date = yearMonthDay;
    const resultDate = date.split("-", 3);
    const [ano, mes, dia] = resultDate;

    const adoption = new Adoption({
      animalID,
      userName,
      year: ano,
      month: mes,
      day: dia,
      yearMonth: `${ano}/${mes}`,
      yearMonthDay,
    });

    //console.log(adoption);

    await adoption.save(adoption);

    res.send({ message: 'Adoção realizada com sucesso!' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Erro ao salvar a adoção.',
    });
  }
};

const findAll = async (req, res) => {
  const { period } = req.query;

  var conditionPeriod = period
    ? { yearMonth: { $regex: new RegExp(period), $options: 'i' } }
    : {};

  try {
    if (period === "" || period === undefined) {
      throw new Error('É necessário informar o parâmetro "?period", cujo valor deve estar no formato yyyy-mm');
    }

    const queryAdoptions = await Adoption.find(conditionPeriod);

    queryAdoptions.sort((a, b) => { return a.day - b.day });

    res.send(queryAdoptions);

  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        'Erro ao listar os lançamentos para o periodo solicitado.',
    });
  }
};



export default {
  create,
  findAll,

  //deleteUser
};