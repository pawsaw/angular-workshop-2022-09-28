import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, Observable, of, retry, switchMap } from 'rxjs';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  // isbn$: Observable<string | null> = of(null);
  book$: Observable<Book | null> = of(null);

  constructor(private _route: ActivatedRoute, private _books: BookApiService) {}

  ngOnInit(): void {
    // this.isbn$ = this._route.params.pipe(map((params) => params['isbn']));
    this.book$ = this._route.params.pipe(
      // map((params) => params['isbn']),
      map((params) => params['isbn']),
      switchMap((isbn) => this._books.findOneByIsbn(isbn)),
    );
  }
}
