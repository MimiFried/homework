import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  @Input()
  address: Address;
  
}
