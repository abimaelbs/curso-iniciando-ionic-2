import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ConnectionService} from './providers/connection-service/connection-service';

import {HomePage} from './pages/home/home';
import {MenuTestPage} from './pages/menu-test/menu-test';
import {GeneratedTestPage} from './pages/generated-test/generated-test';
import {AlertPage} from './pages/alert/alert';
import {ButtonTestPage} from './pages/button-test/button-test';
import {CardTestPage} from './pages/card-test/card-test';
import {IconTestPage} from './pages/icon-test/icon-test';
import {InputTestPage} from './pages/input-test/input-test';
import {ListTestPage} from './pages/list-test/list-test';
import {GridTestPage} from './pages/grid-test/grid-test';
import {ModalTestPage} from './pages/modal-test/modal-test';
import {NavigationTestPage} from './pages/navigation-test/navigation-test';

@Component({
  //template: '<ion-nav [root]="rootPage"></ion-nav>'
  templateUrl: 'build/app.html'
})
export class MyApp {

  home: any = HomePage;
  generated:any = GeneratedTestPage;GeneratedTestPage

  pages: Array<{component:any, title: string, icon: string}>;
  rootPage: any = this.home;

  constructor(platform: Platform) {

    this.pages = [
      {component:HomePage,title:'Home', icon:'home'},
      {component:MenuTestPage,title:'Menu Test', icon:'menu'},
      {component:GeneratedTestPage,title:'Generated Page', icon:'home'},
      {component:AlertPage,title:'Alert', icon:'alert'},
      {component:ButtonTestPage,title:'Button', icon:'menu'},
      {component:CardTestPage,title:'Card',icon:'menu'},
      {component:IconTestPage,title:'Icon',icon:'menu'},
      {component:InputTestPage,title:'Input',icon:'menu'},
      {component:ListTestPage,title:'List',icon:'menu'},
      {component:GridTestPage,title:'Grid',icon:'menu'},
      {component:ModalTestPage,title:'Modal',icon:'menu'},
      {component:NavigationTestPage,title:'Navigatin',icon:'menu'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page:any) : void{
    //console.log('clicou');
    this.rootPage = page.component;
  }
}

ionicBootstrap(MyApp,[ConnectionService],{
//The menu supports several display types: overlay, reveal and push.
//The default type for both Material Design and Windows mode is overlay,
//and reveal is the default type for iOS mode.
/*
  menuType:'push',
  platforms:{
    ios:{
      menuType:'reveal'
    }
  } */
});
