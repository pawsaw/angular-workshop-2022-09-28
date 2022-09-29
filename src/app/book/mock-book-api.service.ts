import { Book } from './book';

export class MockBookApiService {
  constructor() {}

  getAll(): Book[] {
    return [
      {
        title: 'My mock book',
        abstract: 'My mock abstract',
        author: 'Max Mock',
      },
    ];
  }
}
