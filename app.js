import express from 'express';
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';

import { db } from './models/index.js';
//import { transactionRouter } from './routes/Router.js';
import { adoptionRouter } from './routes/adoptionRouter.js';
import { userRouter } from './routes/userRouter.js';
import { animalRouter } from './routes/animalRouter.js';
import { donateRouter } from './routes/donateRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Conexão com o MongoDB Atlas.
(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado com sucesso ao bando de dados');
  } catch (err) {
    console.log(`Erro ao conectar no banco de dados! ${err}`);
    process.exit;
  }
})();

const app = express();
app.use(express.json());

//Cors conectando com o frontend.
app.use(cors({ origin: "http://localhost:3000" }));

/**
 * Rota raiz
 */

app.get('/api/', (_, response) => {
  response.send({
    message:
      'Seja bem vindo ao portal Amigo do Pet',
  });
});
/**
 * Rotas principais do app
 */
//app.use('/api/transaction', transactionRouter);
app.use('/api/adoption', adoptionRouter);
app.use('/api/management', userRouter);
app.use('/api/management', animalRouter);
app.use('/api/management', donateRouter);

app.listen(db.port, () => {
  console.log(`Server working on port:${db.port}`);
});

app.use('/static', express.static(path.join(__dirname, '/public/uploads')))
