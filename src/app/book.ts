export interface Book {
  title: string;
  author: string;
  abstract: string;
}

export const emptyBook: Book = {
  title: '',
  abstract: '',
  author: '',
};
