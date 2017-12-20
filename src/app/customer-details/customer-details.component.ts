import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import {CreditCardType, Customer} from '../customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  public customer = new Customer();
  public creditCardTypes = Object.keys(CreditCardType);
  public customerData: string;

  public saveCustomer(): void {
    this.customerData = JSON.stringify(this.customer);
    this.orderService.customer = this.customer;
  }

  ngOnInit() {
  }

}
