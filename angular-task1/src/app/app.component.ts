import { Component } from '@angular/core';
import { logBgColor } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public username: string = '';
  public isDisplayed: boolean = false;
  public btnClickLogs: string[] = [];
  public logBgColor = logBgColor;
  // ------------------------------------------------------------------------------------------------------------------------------------
  constructor() {}
  // ------------------------------------------------------------------------------------------------------------------------------------
  public resetUserName(): void {
    this.username = '';
  }
  // ------------------------------------------------------------------------------------------------------------------------------------
  public toggleDetails(): void {
    if (this.isDisplayed == false) this.isDisplayed = true;
    else this.isDisplayed = false;

    this.btnClickLogs.push(new Date().toISOString());
  }
}
