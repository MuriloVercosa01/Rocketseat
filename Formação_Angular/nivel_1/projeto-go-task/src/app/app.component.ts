import { Component } from '@angular/core';
import { HeaderComponent } from './_components/header/header.component';
import { MainContentComponent } from './_components/main-content/main-content.component';
import { TaskFormModalComponent } from './_components/task-form-modal/task-form-modal.component';
import { TaskCommentModalComponent } from './_components/task-comment-modal/task-comment-modal.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MainContentComponent,
    TaskFormModalComponent,
    TaskCommentModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projeto-go-task';
}
