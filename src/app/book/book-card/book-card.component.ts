import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: Book | null = null;
  @Output() detailsClicked = new EventEmitter<Book>();

  constructor() {}

  ngOnInit(): void {}

  handleClick(event: MouseEvent): void {
    event.preventDefault();
    if (this.content) {
      this.detailsClicked.emit(this.content);
    }
  }
}
