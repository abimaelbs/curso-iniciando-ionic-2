import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/modal-login/modal-login.html',
})
export class ModalLoginPage {

  user:any = {};

  constructor(private nav: NavController, public view:ViewController, public params:NavParams) {
    console.log('Dados recebidos',params.get('action'));
  }

  logar() {
    this.view.dismiss(this.user);
  }

  close() {
    this.view.dismiss();
  }
}
