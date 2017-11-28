import { Component, OnInit } from '@angular/core';
import { BOOK_DATA } from '../book-data';
import {BookBinding} from '../book/book.module';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public books = BOOK_DATA;
  public selectedBook = null;
  public keywords = null;

  constructor() { }

  ngOnInit() {
  }

  public selectBook(book) {
    this.selectedBook = book;
  }

  public searchBook(keywords) {
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
