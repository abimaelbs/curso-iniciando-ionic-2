import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/input-test/input-test.html',
})
export class InputTestPage {
login:string;
senha:string;

  constructor(private nav: NavController) {}

  public entrar() {
    //let msg: string = ('Login: '+this.login + ' Senha: '+ this.senha);
    let alert = Alert.create({
      title:'Entrando...',
      message:'Login: '+this.login + ' Senha: '+ this.senha
    });
    this.nav.present(alert);
  }
}
