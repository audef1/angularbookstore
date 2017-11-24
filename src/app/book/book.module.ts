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
    authors: string;
    title: string;
    price: number;
    binding: BookBinding;
    publisher: string;
    publicationYear: number;
    numberOfPages: number;
    description: string;
    imageUrl: string;

    constructor(isbn: string, authors: string, title: string, price: number, publisher: string, publicationYear: number
    , binding: BookBinding, numberOfPages: number, description: string, imageUrl: string) {
        this.isbn = isbn;
        this.authors = authors;
        this.title = title;
        this.price = price;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
        this.binding = binding;
        this.numberOfPages = numberOfPages;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}

export enum BookBinding {PAPERBACK }
