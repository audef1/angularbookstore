import { Injectable } from '@angular/core';
import { BOOK_DATA } from './book-data';
import {Book, BookBinding} from './book/book.module';

@Injectable()
export class CatalogService {

  constructor() { }

  private static readonly DELAY = 2000;

  public findBook(isbn: string): Book {
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

  public searchBooks(keywords: string): Book[] {
    return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (keywords.includes('a')) {
        reject('Books with a dont exist.');
      } else {
        resolve(BOOK_DATA.filter(book => this.isMatching(book, keywords)));
      }
    }, CatalogService.DELAY)
    );
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