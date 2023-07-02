import { NextFunction, Request, Response } from "express"
import Restaurant from '../../../models/Restaurant'
import { responseWithRestaurant, restaurant } from "../../../types"

const getARestaurant = ()=>
{
    return async (req:Request,res:responseWithRestaurant,next:NextFunction) => {
        try {
            const restaurantToFind = await Restaurant.findById(req.params.id) as restaurant;
            if(restaurantToFind == null)
            {
                return res.status(404).json("restaurant was not found");
            }

            res.restaurantFromResponse = restaurantToFind;
            next();
           
        } catch (error) {
            res.status(500).json(error)

        }
    }


}

export default getARestaurant;