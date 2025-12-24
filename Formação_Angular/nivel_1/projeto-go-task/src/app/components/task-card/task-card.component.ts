import { Component, inject, Input } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  private readonly _modalControllerService = inject(ModalControllerService);

  @Input({ required: true }) task!: ITask;

  openEditTaskModal() {
    const dialogRef = this._modalControllerService.openEditTaskModal({
      name: 'Nome tarefa',
      description: 'Descrição  tarefa',
    });
    dialogRef.closed.subscribe((taskForm) => {
      console.log('Tarefa editada: ', taskForm);
    });
  }
}
