import mongoose from 'mongoose';
import 'dotenv/config';
import UserModel from './userModel.js';
import AdoptionModel from './adoptionModel.js';
import AnimalModel from './animalModel.js';

const db = {};
db.mongoose = mongoose;
db.url = `mongodb+srv://Ucam2:12345@cluster0.aiphd.mongodb.net/Kratos?retryWrites=true&w=majority`;
db.port = 3500;
db.user = UserModel(mongoose);
db.adoption = AdoptionModel(mongoose);
db.animal = AnimalModel(mongoose);

export { db };
