import { Request, Response } from "express";
import Restaurant from '../../../models/Restaurant'
import { responseWithRestaurant, restaurantToSave } from "../../../types";
const getRestaurants = async (req:Request,res:Response)=>
{
    try {
        const allRestaurants = await Restaurant.find();
        res.json(allRestaurants) ;
    } catch (error) {
        res.json({error})
    }
}

const getSingleRestaurant = async(req:Request,res:Response)=>
{
   try {
        const singleRestaurant = await Restaurant.findById(req.params.id);
        res.json(singleRestaurant) ;
    } catch (error) {
        res.json({error})
    }
}


const postRestaurant =async (req:Request,res:Response) => {

    const newRestaurant= new Restaurant(
    {
        name:req.body.name,
        rating:req.body.rating
    })
    try {
        await newRestaurant.save(); 
        res.status(201).json(newRestaurant)
    } catch (error) {
        res.status(400).json({error})
    }
}


const putRestaurant = async(req:Request,res:responseWithRestaurant)=>
{
    const name = req.body.name;
    const rating = req.body.rating;
    let restaurantToChange = res.restaurantFromResponse as restaurantToSave;
    try {
        if(name !=null)
        {
            restaurantToChange!.name = name;
        }
        if(rating !=null)
        {
            restaurantToChange.rating = rating;
        }
        await restaurantToChange.save();

        res.json(restaurantToChange)
    } catch (error) {
        res.status(400).json({error})
    }
   
}

const deleteRestaurant = async(req:Request,res:responseWithRestaurant)=>
{
    try {
        const restaurantToDelete = res.restaurantFromResponse;
        const name = restaurantToDelete!.name;
        await Restaurant.deleteOne(restaurantToDelete);
        res.json(`${name} restaurant was deleted`)
    } catch (error) {
        res.status(500).json("Restaurant was not found")
    }
    
}
export{getRestaurants,getSingleRestaurant,postRestaurant,putRestaurant,deleteRestaurant}