import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConnectionService} from './../../providers/connection-service/connection-service';

@Component({
  templateUrl: 'build/pages/generated-test/generated-test.html',
  //providers: [ConnectionService]
})

export class GeneratedTestPage {
  cep:string;
  bairro: string;
  cidade:string;
  rua:string;
  uf:string;

  constructor(private nav: NavController,private connectionService: ConnectionService) {}

  buscarCep() : void {
    this.connectionService.getCep(this.cep)
    .then((res) =>{
      let json = res.json();
      this.bairro = json.bairro;
      this.cidade =  json.localidade;
      this.rua =  json.logradouro;
      this.uf =  json.uf;
      console.log(json);
    }).catch((err) =>{
      console.log(err);
    })
  }
}
