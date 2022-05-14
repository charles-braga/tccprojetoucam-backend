import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usuarioModel from './usuarioModel.js';
import adocaoModel from './adocaoModel.js';
import animalModel from './animalModel.js';

/**
 * Faz a leitura do arquivo
 * ".env" por padrão
 */
dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = `mongodb+srv://Ucam2:12345@cluster0.aiphd.mongodb.net/Kratos?retryWrites=true&w=majority`;
db.port = 3500;
db.usuario = usuarioModel(mongoose);
db.adocao = adocaoModel(mongoose);
db.animal = animalModel(mongoose);

export { db };
