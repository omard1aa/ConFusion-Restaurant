import { Component, OnInit } from '@angular/core';
import { dishes } from '../Shared/dish';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  myDishes = dishes;
  selectedDish = this.myDishes[0];
  constructor() { }
  ngOnInit() {
  }

}
