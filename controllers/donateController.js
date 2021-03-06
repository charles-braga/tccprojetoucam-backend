import { db } from '../models/index.js';

const Donation = db.donate;

const create = async (req, res) => {
  const { body } = req;

  console.log(body);

  try {
    if (JSON.stringify(body) === '{}') {
      throw new Error('Conteúdo inexistente');
    }

    //prettier-ignore
    const { product, amount, userName, date } = body;


    const donate = new Donation({
      product,
      amount,
      userName,
      date
    });

    console.log(donate);

    await donate.save(donate);

    res.send({ message: 'Nova doação registrada com sucesso!' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Erro ao gerar a doação.',
    });
  }
};

const findAll = async (req, res) => {
  const { period } = req.query;
  const { description } = req.query;

  //console.log(req.query);

  var conditionPeriod = period
    ? { yearMonth: { $regex: new RegExp(period), $options: 'i' } }
    : {};

  var conditionDescription = description
    ? { description: { $regex: new RegExp(description), $options: 'i' } }
    : {};

  try {
    if (period === undefined || period === '') {
      throw new Error(
        'É necessário informar o parâmetro "?period", cujo valor deve estar no formato yyyy-mm'
      );
    }

    // Usado no teste das rotas.
    /* if (period.length !== 7) {
      throw new Error('Periodo inválido, use o formato yyyy-mm');
    } */

    const transactions = await Transaction.find(conditionPeriod).find(
      conditionDescription
    );

    transactions.sort((a, b) => {
      return a.day - b.day;
    });

    res.send(transactions);
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        'Erro ao listar os lançamentos para o periodo solicitado.',
    });
  }
};

const update = async (req, res) => {
  const { body, params } = req;
  const { _id } = params;
  try {
    if (JSON.stringify(body) === '{}') {
      throw new Error('Conteúdo inexistente');
    }

    if (body.yearMonthDay) {
      const data = body.yearMonthDay;
      const resultado = data.split('-', 3);

      //Contribuição do Herlon Costa
      const [ano, mes, dia] = resultado;

      const editedTransaction = {
        ...body,
        year: ano,
        month: mes,
        day: dia,
        yearMonth: `${ano}-${mes}`,
      };

      const transaction = await Transaction.findByIdAndUpdate(
        { _id: _id },
        editedTransaction,
        { new: true }
      );
      res.send(transaction);
    } else {
      const transaction = await Transaction.findByIdAndUpdate(
        { _id: _id },
        req.body,
        { new: true }
      );

      res.send(transaction);
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || `Erro ao atualizar o lançamento id: ${id}`,
    });
  }
};

const remove = async (req, res) => {
  const { _id } = req.params;

  try {
    const transaction = await Transaction.findByIdAndDelete({ _id: _id });
    res.send({ message: 'Lançamento excluído com sucesso' });
  } catch (err) {
    res.status(500).send({
      message:
        err.message ||
        `Não foi possível deletar os dados do lançamento id: ${id}`,
    });
  }
};

/* const removeAll = async (_, res) => {
  try {
    const transaction = await Transaction.deleteMany();
    if (!transaction) {
      res.status(404).send({ message: `Não há registros de lançamentos.` });
    } else {
      res.send({ message: 'Lançamentos excluídos com sucesso' });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || `Não foi possível deletar os lançamentos.`,
    });
  }
}; */

export default {
  create,
  //findAll,
  //update,
  //remove,
  // removeAll,
};
