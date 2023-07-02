import express from 'express'
import restaurantRouter from './restaurants/index'
import dishesRouter from './dishes/index'
const baseRouter = express.Router();

baseRouter.use('/restaurants',restaurantRouter);
baseRouter.use('/dishes',dishesRouter);



export default baseRouter