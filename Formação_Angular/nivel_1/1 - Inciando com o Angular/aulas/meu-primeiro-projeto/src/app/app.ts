import { Component} from '@angular/core';
import { MeuBotao } from "./meu-botao/meu-botao";

@Component({
  selector: 'app-root',
  imports: [MeuBotao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
