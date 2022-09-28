import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Book, emptyBook } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: Book | null = null;

  constructor() {}

  ngOnInit(): void {}

  handleClick(event: MouseEvent): void {
    event.preventDefault();
    console.log('Clicked', event);
  }
}
