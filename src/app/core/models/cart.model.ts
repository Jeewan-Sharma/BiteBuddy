import { IFoods } from "./foods.model";

export interface ICart {
  food: IFoods;
  quantityInCart: number;
}
