import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  book$: Observable<Book | null> = of(null);

  constructor(private _route: ActivatedRoute, private _books: BookApiService) {}

  ngOnInit(): void {
    // this.isbn$ = this._route.params.pipe(map((params) => params['isbn']));
    this.book$ = this._route.params.pipe(
      // map((params) => params['isbn']),
      map((params) => params['isbn']),
      switchMap((isbn) => this._books.findOneByIsbn(isbn))
    );
  }

  submit(form: NgForm, book: Book): void {
    const editedBook: Book = {
      ...book,
      title: form.value.title,
    };
  }
}
