import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {componentList} from './components-list';

// Services
import {ProductService} from './services/product.service';

// Directives

import {routing} from './app.routes';

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [
    ...componentList
  ],
  providers: [ProductService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [componentList[0]]
})
export class AppModule {}
