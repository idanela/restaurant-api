import express from 'express'
import { getAllDishes, postDish,deleteDish,editDish, getSingleDish } from './handlers/dishesHandlers';
import getADish from './middlewares/getADish'


const router = express.Router();

router.get('/',getAllDishes);
router.get('/:id',getSingleDish);
router.post('/',postDish);
router.delete('/:id',getADish(),deleteDish)
router.put('/:id',getADish(),editDish)







export default router
