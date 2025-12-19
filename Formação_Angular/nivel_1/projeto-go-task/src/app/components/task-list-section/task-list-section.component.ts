import { Component, inject, OnInit } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { taskService } from '../../services/task.service';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-list-section',
  imports: [TaskCardComponent, CdkDropList, CdkDrag],
  templateUrl: './task-list-section.component.html',
  styleUrl: './task-list-section.component.css',
})
export class TaskListSectionComponent implements OnInit {
  todoTasks: ITask[] = [];

  doingTasks: ITask[] = [];

  doneTasks: ITask[] = [];

  private readonly _taskService = inject(taskService);

  ngOnInit(): void {
    this._taskService.todoTasks.subscribe((todoTasks) => {
      this.todoTasks = todoTasks;
    });

    this._taskService.doingTasks.subscribe((doingTasks) => {
      this.todoTasks = doingTasks;
    });

    this._taskService.doneTasks.subscribe((doneTasks) => {
      this.doneTasks = doneTasks;
    });
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
