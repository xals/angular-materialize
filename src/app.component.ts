// vim: set tw=80 ts=2 sw=2 sts=2 :

import { Component } from '@angular/core';

import { MzModalService } from 'ng2-materialize';

import { ModalComponent } from './modal.component';

@Component({
  selector: 'accountant',
  template: `
    <button mz-button (click)="popup()">Popup</button>
  `
})
export class AppComponent {
  constructor(
    private mzModalService: MzModalService,
  ) {}

  popup() {
    this.mzModalService.open(ModalComponent);
  }
}
