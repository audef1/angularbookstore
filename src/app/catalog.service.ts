import { Injectable } from '@angular/core';
import { BOOK_DATA } from './book-data';
import {Book, BookBinding} from './book/book.module';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class CatalogService {

  constructor(private httpClient: HttpClient) {}

  public searchBooks(keywords: string): Promise<Book[]> {
    const url = 'http://distsys.ch:1450/books?keywords=' + keywords;
    return this.httpClient.get<Book[]>(url).toPromise().catch((response: HttpErrorResponse) => {
      console.log('HTTP status ' + response.status + ': ' + response.error);
      throw response.error;
    });
  }

}