import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksFilterPipe } from './books-filter/books-filter.pipe';
import { BookApiService } from './book-api.service';
import { MockBookApiService } from './mock-book-api.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const myMockBookApiService = new MockBookApiService();

@NgModule({
  declarations: [BookComponent, BookCardComponent, BooksFilterPipe],
  providers: [BookApiService],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}
