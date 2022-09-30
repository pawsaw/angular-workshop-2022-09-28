import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  constructor(private readonly _books: BookApiService) {}

  books$: Observable<Book[]> = of([]);

  titleFilter = '';

  titleFilterChanged(inputEvent: Event): void {
    this.titleFilter = (inputEvent.target as HTMLInputElement).value;
  }

  navigateToDetails(book: Book): void {
    console.table(book);
  }

  ngOnInit(): void {
    this.books$ = this._books.getAll();
  }

  ngOnDestroy(): void {}
}
