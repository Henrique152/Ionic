import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public estilo = {backgroundColor: 'red', color: 'white'};
  public cor='red';

  public cores = ['red','green','blue','yellow','black', 'gray'];

  public mostrarInfo = false;

  constructor() {}

  public cliqueAqui() {
    this.estilo.backgroundColor = 'blue';
  }

  public mudarCor(cor) {
    this.cor = cor;
  }

}
