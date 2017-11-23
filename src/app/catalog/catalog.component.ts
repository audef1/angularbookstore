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

  constructor() { }

  ngOnInit() {
  }

  selectBook(book) {
    this.selectedBook = book;
  }

}
