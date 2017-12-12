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
  public error: string;

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
  }

  public selectBook(book) {
    this.selectedBook = book;
  }

  public searchBook(): void {
    this.books = null;
    this.error = null;
    this.catalogService.searchBooks(this.keywords)
        .then(books => this.books = books)
        .catch(error => this.error = error);
  }

  public findBook(isbn: string) {
      this.selectedBook = this.catalogService.findBook(isbn);
  }

}
