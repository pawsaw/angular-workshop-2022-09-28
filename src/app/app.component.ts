import { Component } from '@angular/core';
import { books } from '../data/books';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  books = books;

  titleFilter = '';

  titleFilterChanged(inputEvent: Event): void {
    this.titleFilter = (inputEvent.target as HTMLInputElement).value;
  }

  navigateToDetails(book: Book): void {
    console.table(book);
  }
}
