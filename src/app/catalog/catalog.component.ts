import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public books;
  public selectedBook = null;
  public keywords = null;

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
  }

  public selectBook(book) {
    this.selectedBook = book;
  }

  public searchBook(keywords: string) {
    this.books = this.catalogService.searchBooks(keywords);
  }

  public findBook(isbn: string) {
      this.selectedBook = this.catalogService.findBook(isbn);
  }

}
