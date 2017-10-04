// vim: set tw=80 ts=2 sw=2 sts=2:
import { Component, Input, ViewChild } from '@angular/core';

import { MzBaseModal } from 'ng2-materialize';

@Component({
  selector: 'login-modal',
  template: `
<mz-modal>
  <mz-modal-header>
    Authentification requise
  </mz-modal-header>

  <mz-modal-content>
    Lorem ipsum…
  </mz-modal-content>

  <mz-modal-footer>
    <button class="btn btn-primary" mz-modal-close>Close</button>
  </mz-modal-footer>
</mz-modal>
  `
})
export class ModalComponent extends MzBaseModal {
}
