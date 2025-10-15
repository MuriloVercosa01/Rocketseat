import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-botao',
  imports: [],
  templateUrl: './meu-botao.html',
  styleUrl: './meu-botao.css'
})
export class MeuBotao {

  filtrar() {
    console.log("Método filtrar!")
  }

  limpar() {
    console.log("Método limpar!")
  }

}
