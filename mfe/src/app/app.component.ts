import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
      this.users = res;
    });
  }

  // constructor(private router: Router) { }

  // ngOnInit(): void {
  //   this.router.navigateByUrl(location.pathname.substr(1));
  //   window.addEventListener('popstate', () => {
  //     this.router.navigateByUrl(location.pathname.substr(1));
  //   });
  // }
}
