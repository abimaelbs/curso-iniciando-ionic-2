import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardTestPage } from '../card-test/card-test';

@Component({
  templateUrl: 'build/pages/navigation-test/navigation-test.html',
})
export class NavigationTestPage {
  constructor(private nav: NavController) {}

  openPage() {
    this.nav.push(CardTestPage, {
      mensagem: 'Mensagem vinda de NavigationTestPage'
    });
  }
}
