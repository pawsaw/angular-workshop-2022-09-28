import {
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

export type MsgType = 'success' | 'error' | 'warning';
export type MsgColor = 'green' | 'red' | 'yellow';

const typeColorMap: Record<MsgType, MsgColor> = {
  success: 'green',
  error: 'red',
  warning: 'yellow',
};

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss'],
})
export class MsgComponent implements OnInit, OnChanges {
  @Input() type: MsgType = 'success';

  color: MsgColor = 'green';

  @ContentChild('span') text = '';

  constructor() {}

  ngOnInit(): void {
    // this.color = typeColorMap[this.type];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type']) {
      this.color = typeColorMap[this.type];
    }
  }
}
