import { Inject, Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookApiService {
  constructor() {}

  getAll(): Book[] {
    return [];
  }
}
