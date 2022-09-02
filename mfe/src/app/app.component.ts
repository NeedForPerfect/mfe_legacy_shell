import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, VERSION, ViewEncapsulation } from '@angular/core';
import { users$ } from './../bootstrap';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {

  users;

  constructor(
    private http: HttpClient
  ) {
  }

  @Input() message: string;
  @Output() clicked = new EventEmitter<string>();

  ngVersion = VERSION.full;//require('../../package.json').dependencies['@angular/core'];

  ngOnInit(): void {
  }

  makeRequest(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any[]) => {
      this.users = res;
      users$.next(res);
    });
  }
}
