import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { elementName } from 'src/bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { NestedComponent } from './nested/nested.component';

const routes: Routes = [
  {
    path: 'b-module',
    loadChildren: () => import('./app.another-module').then(m => m.AnotherModule)
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    NestedComponent
  ],
  bootstrap: []
})
export class AppModule {
  constructor(
    private injector: Injector
    ) {
  }



  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define(elementName, ce);
  }

}
