import { Injectable } from '@angular/core';
import { IBusinessDetails } from '../models/businessDetails.model';
import { PSEUDO_API } from '../const/pseudo-api.const';
import { IFoods } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getBusinessDetails(): Promise<IBusinessDetails> {
    return new Promise((resolve, reject) => {
      resolve(PSEUDO_API.businessDetails)
    })
  }

  getTodaysSpecial(): Promise<IFoods[]> {
    return new Promise((resolve, reject) => {
      resolve(PSEUDO_API.todaysSpecial)
    })
  }
  getALLDeals(): Promise<IFoods[]> {
    return new Promise((resolve, reject) => {
      resolve(PSEUDO_API.allDeals)
    })
  }
}
