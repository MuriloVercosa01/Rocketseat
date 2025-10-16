import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.html',
  styleUrl: './two-way-data-binding.css'
})
export class TwoWayDataBinding {
logarTexto() {
  console.log("Valor de input sincronizado: ", this.texto)
}
  texto:string = 'texto inicial'
}
