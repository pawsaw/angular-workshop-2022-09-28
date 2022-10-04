import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksFilterPipe } from './books-filter/books-filter.pipe';
import { BookApiService } from './book-api.service';
import { MockBookApiService } from './mock-book-api.service';
import { BookRoutingModule } from './book-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule } from '@angular/forms';

const myMockBookApiService = new MockBookApiService();

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BooksFilterPipe,
    BookDetailComponent,
    BookEditComponent,
  ],
  providers: [BookApiService],
  imports: [CommonModule, BookRoutingModule, FormsModule],
  exports: [BookComponent],
})
export class BookModule {}
