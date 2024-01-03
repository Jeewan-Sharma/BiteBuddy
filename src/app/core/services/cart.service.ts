import { Injectable } from '@angular/core';
import { ICart, IFoods } from '@core/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: BehaviorSubject<any> = new BehaviorSubject([])


  constructor() { }

  addToCart(product: IFoods, quantityToAdd: number): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const storedJSON = localStorage.getItem('BBCartProducts');
        const storedRestaurantData: ICart[] = storedJSON ? JSON.parse(storedJSON) : [];
        const existingProductIndex = storedRestaurantData.findIndex(i => i.food.posItemID === product.posItemID);
        if (existingProductIndex === -1) {
          storedRestaurantData.push({ food: product, quantityInCart: quantityToAdd });
        } else {
          storedRestaurantData[existingProductIndex].quantityInCart += quantityToAdd;
        }
        const newDataJSON = JSON.stringify(storedRestaurantData);
        localStorage.setItem('BBCartProducts', newDataJSON);
        console.log(storedRestaurantData);
        resolve(true);
      } catch (e) {
        reject(false)
      }
    })
  }

  getProductsFromCart(): Promise<ICart[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const storedJSON = localStorage.getItem('BBCartProducts');
        if (storedJSON) {
          const storedCartProducts: ICart[] = JSON.parse(storedJSON);
          resolve(storedCartProducts);
          this.cartProducts.next(storedCartProducts)
        } else {
          resolve([]);
        }
      } catch (e) {
        reject(e)
      }
    })
  }

  changeProductsFromCart(products: ICart): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const newDataJSON = JSON.stringify(products);
        localStorage.setItem('BBCartProducts', newDataJSON);
        this.cartProducts.next(products)
        resolve(true);
      } catch (e) {
        reject(false)
      }
    })
  }

  removeProductFromCart(product: ICart): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const storedJSON = localStorage.getItem('BBCartProducts');
        if (storedJSON) {
          const storedCartProducts: ICart[] = JSON.parse(storedJSON);
          const index = storedCartProducts.findIndex(i => i.food.posItemID === product.food.posItemID);
          if (index !== -1) {
            storedCartProducts.splice(index, 1);
            // Convert the updated array back to a JSON string and save it in localStorage
            const updatedJSON = JSON.stringify(storedCartProducts);
            localStorage.setItem('BBCartProducts', updatedJSON);
            resolve(true); // Note deleted successfully
          } else {
            resolve(false); // Note with the given title not found
          }
        }
      } catch (e) {
        reject(e)
      }
    })
  }

}
