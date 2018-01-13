import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import {CreditCardType, Customer} from '../customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customer = new Customer();
  public creditCardTypes = Object.keys(CreditCardType);
  public customerData: string;

  constructor(private orderService: OrderService, private router: Router) {
    if (orderService.customer){
      this.customer = orderService.customer;
    }
  }

  public saveCustomer(): void {
    this.customerData = JSON.stringify(this.customer);
    this.orderService.customer = this.customer;
    this.router.navigate(['order-summary']);
  }

  ngOnInit() {
  }

}
