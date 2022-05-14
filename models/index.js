import mongoose from 'mongoose';
import dotenv from 'dotenv';
import TransactionModel from './usuarioModel.js';

/**
 * Faz a leitura do arquivo
 * ".env" por padrão
 */
dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.gpins.mongodb.net/Kratos?retryWrites=true&w=majority`;
db.port = process.env.PORT;
db.Transaction = TransactionModel(mongoose);

export { db };
