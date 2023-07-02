import { Response } from "express"


type numberInRange =
{
    number:1|2|3|4|5
}

type restaurant ={
    name:string,
    rating:numberInRange
}


type dish = {
    name:string,
    price:number,
    restaurant:restaurant
}

export interface responseWithDish extends Response
{
    dishFromResponse?:dish
}

export interface dishToSave extends dish
{
    save:Function
}

export interface responseWithRestaurant extends Response
{
    restaurantFromResponse?:restaurant
}

export interface restaurantToSave extends restaurant
{
    save:Function
}


export{restaurant,numberInRange,dish}