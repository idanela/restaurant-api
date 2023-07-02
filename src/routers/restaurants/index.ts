import express from 'express'
import {getRestaurants,getSingleRestaurant,postRestaurant,putRestaurant,deleteRestaurant} from './handlers/restaurantsHandlers'
import getARestaurant from './middlewares/getARestaurant';
const router = express.Router();


router.get('/',getRestaurants);
router.get('/:id',getSingleRestaurant)
router.post('/',postRestaurant);
router.put('/:id',getARestaurant(),putRestaurant);
router.delete('/:id',getARestaurant(),deleteRestaurant)






















export default router;