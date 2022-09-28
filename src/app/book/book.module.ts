import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksFilterPipe } from './books-filter/books-filter.pipe';

@NgModule({
  declarations: [BookComponent, BookCardComponent, BooksFilterPipe],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}
