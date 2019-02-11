import { Injectable } from '@angular/core';
import { LEADERS} from '../Shared/leaders';
import {Leader} from '../Shared/Leader';
import {DISHES} from '../Shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Leader[] {
    return LEADERS;
  }
  getLeader(id: number): Leader {
    return LEADERS[id];
  }
  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => (leader.featured))[0];
  }
}
