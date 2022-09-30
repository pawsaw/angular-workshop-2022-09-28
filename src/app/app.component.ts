import { Component, OnDestroy, OnInit } from '@angular/core';
import { MsgType } from './msg/msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  type: MsgType = 'success';

  private _interval: any = 0;

  ngOnDestroy(): void {
    clearInterval(this._interval);
  }

  ngOnInit(): void {
    this._interval = setInterval(() => {
      this.type = new Date().getTime() % 3 === 0 ? 'error' : 'warning';
    }, 1000);
  }
}
