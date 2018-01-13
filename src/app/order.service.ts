import { Injectable } from '@angular/core';
import {Book} from './book/book.module';
import {Customer} from './customer';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {isSuccess} from '@angular/http/src/http_utils';

@Injectable()
export class OrderService {

  public book: Book;
  public customer: Customer;
  public successmessage: String;
  public errormessage: String;

  constructor(private httpClient: HttpClient) {}

  public orderBook(): Promise<number> {

    this.successmessage = '';
    this.errormessage = '';

    const url = 'http://distsys.ch:1450/books/' + this.book.isbn + '/orders';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<number>(url, this.customer, httpOptions).toPromise();
  }
}
