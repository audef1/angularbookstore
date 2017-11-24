import { Component, OnInit } from '@angular/core';
import { BOOK_DATA } from '../book-data';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  books = BOOK_DATA;
  selectedBook = null;
  keywords = null;
  searchwords = '';

  constructor() { }

  ngOnInit() {
  }

  selectBook(book) {
    this.selectedBook = book;
  }

  searchBook(keywords) {
    this.keywords = keywords;
    this.searchwords = this.keywords.split(' ');
    this.books = BOOK_DATA.filter(this.hasKeyword);
  }

  hasKeyword(book) {
    for (let k of this.searchwords) {
      if (book.description.includes(k) || book.title.includes(k) || book.authors.includes(k) || book.publisher.includes(k)) {
        return true;
      }
    }
    return false;
  }
}
