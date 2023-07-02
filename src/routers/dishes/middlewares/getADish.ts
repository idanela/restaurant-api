import { NextFunction, Request, Response } from "express";
import Dish from "../../../models/Dish";
import { dish, responseWithDish } from "../../../types";

const getADish=()=>
{
    return async (req:Request,res:responseWithDish,next:NextFunction) => {
        try {
            const dishTofind = await Dish.findById(req.params.id) as dish
            if(dishTofind == null)
            {
                return res.status(404).json("dish was not found");
            }
            res.dishFromResponse = dishTofind;
            next();
        } catch (error) {
            res.status(400).json({error})
        }
    }
}

export default getADish;