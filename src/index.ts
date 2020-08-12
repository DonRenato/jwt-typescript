import express from 'express';
import routes from '../src/Routes/routes';
import cors from 'cors';

import './data/connect';
import 'reflect-metadata';


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, ()=> console.log('🔥 Server started at http://localhost:3333 '));