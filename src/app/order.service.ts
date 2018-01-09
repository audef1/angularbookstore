import { Injectable } from '@angular/core';
import {Book} from './book/book.module';
import {Customer} from './customer';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable()
export class OrderService {

  public book: Book;
  public customer: Customer;

  constructor(private httpClient: HttpClient) {}

  public orderBook(): Promise<number> {
    const url = 'http://distsys.ch:1450/books/' + this.book.isbn + '/orders';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<number>(url, this.customer, httpOptions).toPromise().catch((response: HttpErrorResponse) => {
      console.log('HTTP status ' + response.status + ': ' + response.error);
      throw response.error;
    });
  }
}
