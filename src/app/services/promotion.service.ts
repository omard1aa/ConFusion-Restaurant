import { Injectable } from '@angular/core';
import {DISHES} from '../Shared/dishes';
import {Dish} from '../Shared/dish';
import {PROMOTIONS} from '../Shared/promotions';
import {Promotion} from '../Shared/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }
  getDish(id: number): Promotion {
    return PROMOTIONS[id];
  }
  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => (promotion.featured))[0];
  }
}
