import { Component} from '@angular/core';
import { MeuBotao } from "./meu-botao/meu-botao";
import { BotaoFlat } from "./botao-flat/botao-flat";

@Component({
  selector: 'app-root',
  imports: [MeuBotao, BotaoFlat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
