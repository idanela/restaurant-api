import { Request, Response } from "express";
import {  dishToSave, responseWithDish } from "../../../types";
import Dish from "../../../models/Dish";

const getAllDishes = async(req:Request,res:Response)=>
{
    try {
        const dishes = await Dish.find();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({error})
    }
}

const getSingleDish = async(req:Request,res:Response)=>
{
    try {
        const dishes = await Dish.findById(req.params.id);
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({error})
    }  
}


const postDish =async (req:Request,res:Response) => {
    const {name,price,restaurant}= req.body;
    const newDish = new Dish({
        name:name,
        price:price,
        restaurant:restaurant
    })

    try {
        const dishSaved = await newDish.save();
        res.status(201).json(dishSaved);
    } catch (error) {
        res.status(400).json({error})
    }
}

const deleteDish = async (req:Request,res:responseWithDish)=>
{
    try {
        const dishToDelete = res.dishFromResponse;
        const name = dishToDelete!.name;
        await Dish.deleteOne(dishToDelete);
        res.json(`${name} dish was deleted`)

    } catch (error) {
        res.status(500).json({error})
    }
}


const editDish = async (req:Request,res:responseWithDish)=>
{
    const name = req.body.name;
    const price = req.body.price
     
    try {
         const dishToUpdate = res.dishFromResponse as dishToSave;
         if(name!=null)
         {
            dishToUpdate.name = name;
         }
         if(price!=null)
         {
            dishToUpdate.price = price;
         }
         await dishToUpdate.save();
            res.json(dishToUpdate);
    } catch (error) {
        res.status(400).json({error})
    }

}

export {getAllDishes,postDish,deleteDish,editDish,getSingleDish}