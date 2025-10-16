import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {
onFocus() {
  console.log("chamou o método onFocus()")
}
onBlur() {
  console.log("chamou o método onBlur()")
}
onInput(event: Event) {
  console.log('chamou o método onInput()')
  console.log('event: ', event)
  const value = (event.target as HTMLInputElement).value;
  console.log("input value: ", value);

}
onButtonClick() {
  console.log("chamou o método onButtonClick()")
}

}
