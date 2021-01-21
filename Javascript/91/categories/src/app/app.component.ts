import { Component } from '@angular/core';
import Category from "./category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'categories';

  categoryList: Category [] = [
    {
      category: 'food',
      items: [
        {
          name: "soda",
          price: 1.99
        },
        {
          name: "cookies",
          price: 4.99
        }
      ]      
    },
    {
      category: "clothing",
      items: [
        {
          name: "shirt",
          price: 35.99
        },
        {
          name: "skirt",
          price: 49.99
        }
      ]      
    },
    {
      category: "furniture",
      items: []
    }
  ]

  selectedCategory: Category = this.categoryList[0];
 

}
