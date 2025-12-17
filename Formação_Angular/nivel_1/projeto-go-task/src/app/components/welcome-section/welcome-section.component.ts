import { Component, inject } from '@angular/core';
import { ModalControllerService } from './../../services/modal-controller.service';
import { DialogRef } from '@angular/cdk/dialog';
import { TaskFormModalComponent } from '../task-form-modal/task-form-modal.component';
@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css',
})
export class WelcomeSectionComponent {
  private readonly _modalControllerService = inject(ModalControllerService);

  openNewTaskModal() {
    this._modalControllerService.openNewTaskModal();
  }
}
