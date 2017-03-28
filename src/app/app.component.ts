import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Our cookbook';
  recipes: Recipe[] = [
    new Recipe('Chili', ['Ground beef', 'kidney beans', 'jalapeno peppers', 'onions', 'cumin', 'paprika', 'tomatoes', 'coriander'], ['Cook your beef', 'Add the vegetables', 'Flavor with spices', 'Eat!']),
    new Recipe('Pad Thai', ['Noodles', 'beansprouts', 'lime', 'peanuts', 'tofu', 'soy sauce', 'coconut milk'], ['Cook your tofu', 'add the sauce and milk', 'add the rest and cook', 'mix in cooked noodles']),
    new Recipe('Chocolate Chip Cookies', ['flour', 'sugar', 'chocolate chips', 'baking powder', 'vanilla extract', 'eggs', 'butter'], ['Mix the butter, sugar, butter, and eggs', 'Add the flour and baking powder', 'Add the chocolate chip', 'Bake in the oven for 30 minutes']),
    new Recipe('Chicken Tikka Masala', ['chicken', 'paprika', 'butter', 'cumin', 'coriander', 'garam masala', 'tomatoes', 'rice', 'saffron'], ['Rub the spices on the chicken and cook in the oven', 'Mix the butter and tomatoes and add the chicken to the pot to cook more', 'Make the rice with saffron and add the chicken'])
  ];

}

export class Recipe {
  constructor(public title: string, public ingredients: string [], public directions: string []) { }
}
