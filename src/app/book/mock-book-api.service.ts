import { Observable, of } from 'rxjs';
import { Book } from './book';

export class MockBookApiService {
  constructor() {}

  getAll(): Observable<Book[]> {
    return of([]);
  }
}
