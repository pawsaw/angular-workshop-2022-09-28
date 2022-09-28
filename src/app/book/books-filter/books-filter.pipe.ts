import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book';

@Pipe({
  name: 'booksFilter',
})
export class BooksFilterPipe implements PipeTransform {
  transform(books: Book[], title: string): Book[] {
    return books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  }
}
