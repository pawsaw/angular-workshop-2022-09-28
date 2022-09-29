import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  private _sub = new Subscription();

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
    const sub = this._books.getAll().subscribe({
      next: (books) => {
        this.books = books;
      },
    });

    this._sub.add(sub);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
