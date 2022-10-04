import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';

@Injectable({
  providedIn: 'root',
})
export class CanLeaveGuard implements CanDeactivate<BookDetailComponent> {
  canDeactivate() {
    return confirm('Are your sure?');
  }
}
