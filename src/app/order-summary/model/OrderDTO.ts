import { FoodItem } from "../../Shared/models/FoodItem";
import { Restaurant } from "../../Shared/models/Restaurant";

export interface OrderDTO{

    foodItemList?: FoodItem[];
    userId?: number;
    restaurant?: Restaurant;
}