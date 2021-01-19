import { Component } from '@angular/core';
import { Order } from './order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-hw-app';

 order: Order = {
   customer: {
    firstName: 'Joe',
    lastName: 'Brown',
    address: {
      street: '123 Main Street',
      city: 'Lakewood',
      state: 'NJ',
      zip: '08701'
    }
   },
   item: {
    itemName: 'shoes',
    price: 105
   },
   date: new Date()
 }
}