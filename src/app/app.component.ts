import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  book: Book = {
    title: 'Super Angular Buch',
    author: 'Max Mustermann',
    abstract: 'Lorem ipsum',
  };

  navigateToDetails(book: Book): void {
    console.table(book);
  }
}
