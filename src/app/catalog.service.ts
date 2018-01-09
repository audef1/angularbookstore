import { Injectable } from '@angular/core';
import { BOOK_DATA } from './book-data';
import {Book, BookBinding} from './book/book.module';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class CatalogService {

  private static readonly DELAY = 2000;

  constructor(private httpClient: HttpClient) {}

  public findBook(isbn: string): Promise<Book> {
    return new Promise<Book>((resolve, reject) =>
    setTimeout(() => {
      let book = BOOK_DATA.find(book => book.isbn === isbn);
      if (book) {
        resolve(book);
      } else {
        reject('Book with ISBN ' + isbn + ' not found.');
      }
    }, CatalogService.DELAY)
    );
  }

  public searchBooks(keywords: string): Promise<Book[]> {
    const url = 'http://distsys.ch:1450/books?keywords=' + keywords;
    return this.httpClient.get<Book[]>(url).toPromise().catch((response: HttpErrorResponse) => {
      console.log('HTTP status ' + response.status + ': ' + response.error);
      throw response.error;
    });
  }

  private isMatching(book: Book, keywords: string): boolean {
    const words = keywords.toLowerCase().split(' ');
    const data = (book.description + ' ' + book.title + ' ' + book.authors + ' ' + book.publisher).toLowerCase();
    for (const word of words) {
        if (data.includes(word)) {
          return true;
        }
    }
      return false;
  }

}