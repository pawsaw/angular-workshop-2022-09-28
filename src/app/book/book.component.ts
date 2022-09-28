import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { books } from './data/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor() {}

  books = books;

  titleFilter = '';

  titleFilterChanged(inputEvent: Event): void {
    this.titleFilter = (inputEvent.target as HTMLInputElement).value;
  }

  navigateToDetails(book: Book): void {
    console.table(book);
  }

  ngOnInit(): void {}
}
