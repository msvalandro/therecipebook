import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'An Amazing Pizza',
      'This is the best Pizza ever!',
      'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      [new Ingredient('Tomatoes', 3), new Ingredient('Olives', 4)]
    ),
    new Recipe(
      'The Brazilian Barbecue',
      'The real awesome Brazilian Barbecue',
      'https://images.unsplash.com/photo-1463183427169-5df5a06d5447?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      [new Ingredient('Meat', 2), new Ingredient('Sausage', 3)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
