import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(private readonly _books: BookApiService) {}

  books: Book[] | null = null;

  titleFilter = '';

  titleFilterChanged(inputEvent: Event): void {
    this.titleFilter = (inputEvent.target as HTMLInputElement).value;
  }

  navigateToDetails(book: Book): void {
    console.table(book);
  }

  ngOnInit(): void {
    this._books.getAll().subscribe({
      next: (books) => {
        this.books = books;
      },
    });
  }
}
