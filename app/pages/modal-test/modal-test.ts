import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';
import { ModalLoginPage } from '../modal-login/modal-login';

@Component({
  templateUrl: 'build/pages/modal-test/modal-test.html',
})
export class ModalTestPage {
  constructor(private nav: NavController) {}

  public openModal() {
    let modal = Modal.create(ModalLoginPage, {
      action:'logar'
    });

    modal.onDismiss((param) => {
      console.log('Dados do usuário', param);
    });

    this.nav.present(modal);
  }

}
