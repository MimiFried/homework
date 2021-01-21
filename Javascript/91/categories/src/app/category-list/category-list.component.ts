import { Component, Input, OnInit, Output } from '@angular/core';
import Category from "../category"

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
@Input()
categories!: Category[];

selectedCategory!: Category;
categorySelected(selCategory: string){
  this.selCategory = selCategory;
}
}
