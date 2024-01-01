import { Injectable } from '@angular/core';
import { IFoods } from '../models/foods.moldel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product: IFoods, quantityToAdd: number): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const storedJSON = localStorage.getItem('BBCartProducts');
        const storedRestaurantData: any[] = storedJSON ? JSON.parse(storedJSON) : [];
        console.log(storedRestaurantData)
        resolve(true)
      } catch (e) {
        reject(false)
      }
    })
  }
}
