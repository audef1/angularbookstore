import { Injectable } from '@angular/core';
import {Book} from "./book/book.module";
import {Customer} from "./customer";

@Injectable()
export class OrderService {

  public book: Book;
  public customer: Customer;

}
