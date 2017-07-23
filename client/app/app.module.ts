import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {declarablesList} from './declarables-list';

// Services
import {ProductService} from './services/product.service';

// Directives


import {routing} from './app.routes';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [BrowserModule, routing, ReactiveFormsModule, FormsModule, HttpModule],
  declarations: [
    ...declarablesList
  ],
  providers: [ProductService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [declarablesList[0]]
})

export class AppModule {
}
