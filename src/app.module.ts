// vim: set tw=80 ts=2 sw=2 sts=2:
import 'zone.js';
import 'reflect-metadata';

require('./main.scss');

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterializeModule } from 'ng2-materialize'

import { AppComponent } from './app.component';
import { ModalComponent } from './modal.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  entryComponents: [
    ModalComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor() {}
}
