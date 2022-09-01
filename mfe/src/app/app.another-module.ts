import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import { BComponent } from './b/b.component';
import { elementName } from 'src/another-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [
    BComponent,
  ],
  bootstrap: []
})
export class AnotherModule {
  constructor(
    private injector: Injector
    ) {
  }



  ngDoBootstrap() {
    const customElement = createCustomElement(BComponent, {injector: this.injector});
    customElements.define(elementName, customElement);
  }

}
