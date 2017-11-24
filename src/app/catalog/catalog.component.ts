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

  constructor() { }

  ngOnInit() {
  }

  selectBook(book) {
    this.selectedBook = book;
  }

  searchBook(keywords) {
    this.keywords = keywords;
    const searchwords = this.keywords.split(' ');
    this.books = BOOK_DATA.filter(function(book){
        for (let w of searchwords) {
            if (book.description.toLowerCase().includes(w.toLowerCase()) ||
                book.title.toLowerCase().includes(w.toLowerCase()) ||
                book.authors.toLowerCase().includes(w.toLowerCase()) ||
                book.publisher.toLowerCase().includes(w.toLowerCase())) {
                return true;
            }
        }
        return false;
    });
  }
}
