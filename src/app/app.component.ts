import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgType } from './msg/msg.component';
import { NavigationTarget } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  type: MsgType = 'success';

  private _interval: any = 0;

  constructor(private _router: Router) {}

  ngOnDestroy(): void {
    clearInterval(this._interval);
  }

  ngOnInit(): void {
    this._interval = setInterval(() => {
      this.type = new Date().getTime() % 3 === 0 ? 'error' : 'warning';
    }, 1000);
  }

  navigationTriggerd(target: NavigationTarget): void {
    this._router.navigate([target]);
  }
}
