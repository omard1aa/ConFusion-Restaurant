import { Injectable } from '@angular/core';
import {Dish} from '../Shared/dish';
import {DISHES} from '../Shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
}
  getDish(id: number): Dish {
    return DISHES[id];
  }
  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => (dish.featured))[0];
  }
}
