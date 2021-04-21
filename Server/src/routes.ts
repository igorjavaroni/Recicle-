import express, { response } from 'express';
import { request } from 'node:http';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import PointItemsController from './controllers/PointItemsController';


const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();
const PointItemsControll: any = new PointItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.get('/pointitems', PointItemsControll.index);

export default routes;