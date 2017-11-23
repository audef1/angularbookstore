import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class BookModule {

}

export class Book {
    isbn: string;
    author: string;
    title: string;
    price: number;
    binding: BookBinding;
    publisher: string;
    year: number;
    pages: number;
    description: string;
    image: string;

    constructor(isbn: string, author: string, title: string, price: number, publisher: string, year: number
    , binding: BookBinding, pages: number, description: string, image: string) {
        this.isbn = isbn;
        this.author = author;
        this.title = title;
        this.price = price;
        this.publisher = publisher;
        this.year = year;
        this.binding = binding;
        this.pages = pages;
        this.description = description;
        this.image = image;
    }
}

export enum BookBinding {PAPERBACK }
