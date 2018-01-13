import { Component, OnInit } from '@angular/core';
import {Book} from '../book/book.module';
import {Customer} from '../customer';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  public book: Book;
  public customer: Customer;
  public successmessage: String;
  public errormessage: String;

  constructor(private orderService: OrderService) {
    this.book = this.orderService.book;
    this.customer = this.orderService.customer;
  }

  ngOnInit() {
  }

  public submitOrder() {
    this.orderService.orderBook().then((response: HttpErrorResponse) => {
      console.log('Order successful: ' + response);
      this.successmessage = response;

    })
        .catch((response: HttpErrorResponse) => {
          console.log('HTTP status ' + response.status + ': ' + response.error);
          this.errormessage = response.error;
          throw response.error;
        });
  }
}
