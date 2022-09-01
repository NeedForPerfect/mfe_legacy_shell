import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { endsWith } from './router.utils';
import { AComponent } from './a/a.component';

@NgModule({
  imports: [
    BrowserModule,
    // RouterModule.forRoot([
    //   { matcher: endsWith('a'), component: AComponent},
    //   { matcher: endsWith('b'), component: BComponent},
    // ])
    HttpClientModule,
  ],
  declarations: [
    AComponent,
    AppComponent
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
    customElements.define('angular1-element', ce);
  }

}
