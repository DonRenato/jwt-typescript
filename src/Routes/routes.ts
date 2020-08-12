import Router from 'express';
import UserController from '../app/controllers/UserController';
import AuthController from '../app/controllers/AuthController';
import AuthMiddleware from '../app/middlewares/authMiddleware';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.authenticate);
routes.get('/users', AuthMiddleware, UserController.index);
routes.get('/list', UserController.list);


export default routes;