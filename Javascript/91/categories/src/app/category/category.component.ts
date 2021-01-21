import { Component, Input, OnInit } from '@angular/core';
import Category from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent  {
  @Input()
  category!: Category;

}
