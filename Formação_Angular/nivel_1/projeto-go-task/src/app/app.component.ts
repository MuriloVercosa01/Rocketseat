import { Component } from '@angular/core';
import { HeaderComponent } from './_components/header/header.component';
import { MainContentComponent } from './_components/main-content/main-content.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projeto-go-task';
}
