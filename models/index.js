import mongoose from 'mongoose';
import 'dotenv/config';
import usuarioModel from './usuarioModel.js';
import adocaoModel from './adocaoModel.js';
import animalModel from './animalModel.js';

const db = {};
db.mongoose = mongoose;
db.url = `mongodb+srv://Ucam2:12345@cluster0.aiphd.mongodb.net/Kratos?retryWrites=true&w=majority`;
db.port = process.env.PORT;
db.usuario = usuarioModel(mongoose);
db.adocao = adocaoModel(mongoose);
db.animal = animalModel(mongoose);

export { db };
