import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Some name', 'some description', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2Frecipes%2F2023%2F2023-06-zucchini-pancakes%2Fzucchini-pancakes-1'),
    new Recipe('Some name', 'some description', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2Frecipes%2F2023%2F2023-06-zucchini-pancakes%2Fzucchini-pancakes-1')
  ]
  constructor() { }

  ngOnInit() {
  }

}
