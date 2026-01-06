import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { ITask } from '../interfaces/task.interface';
import { ITaskFormControls } from '../interfaces/task-form-controls-interface';
import { TaskStatusEnum } from '../enums/task-status.enum';
import { genarateUniqueIdWithTimestamp } from '../utils/generate-unique-id-with-timestamp';
import { TaskStatus } from '../types/task-status';
import { IComment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //tarefas em A fazer
  private todoTasks$ = new BehaviorSubject<ITask[]>(
    this.loadTasksfromLocalStorage(TaskStatusEnum.TODO),
  );
  readonly todoTasks = this.todoTasks$.asObservable().pipe(
    map((todoTasks) => structuredClone(todoTasks)),
    tap((tasks) => this.saveTasksOnLocalStorage(TaskStatusEnum.TODO, tasks)),
  );
  //tarefas em Fazendo
  private doingTasks$ = new BehaviorSubject<ITask[]>(
    this.loadTasksfromLocalStorage(TaskStatusEnum.DOING),
  );
  readonly doingTasks = this.doingTasks$.asObservable().pipe(
    map((tasks) => structuredClone(tasks)),
    tap((tasks) => this.saveTasksOnLocalStorage(TaskStatusEnum.DOING, tasks)),
  );

  //Tarefas em Concluído
  private doneTasks$ = new BehaviorSubject<ITask[]>(
    this.loadTasksfromLocalStorage(TaskStatusEnum.DONE),
  );
  readonly doneTasks = this.doneTasks$.asObservable().pipe(
    map((tasks) => structuredClone(tasks)),
    tap((tasks) => this.saveTasksOnLocalStorage(TaskStatusEnum.DONE, tasks)),
  );

  addTask(taskInfos: ITaskFormControls) {
    const newTask: ITask = {
      ...taskInfos,
      status: TaskStatusEnum.TODO,
      id: genarateUniqueIdWithTimestamp(),
      comments: [],
    };
    const currentList = this.todoTasks$.value;
    this.todoTasks$.next([...currentList, newTask]);
  }

  updateTaskStatus(
    taskId: string,
    taskCurrentStatus: TaskStatus,
    taskNextStatus: TaskStatus,
  ) {
    const currentTaskList = this.getTaskListByStatus(taskCurrentStatus);
    const nextTaskList = this.getTaskListByStatus(taskNextStatus);
    const currentTask = currentTaskList.value.find(
      (task) => task.id === taskId,
    );

    if (currentTask) {
      currentTask.status = taskNextStatus;
      const currentTaskListWithoutTask = currentTaskList.value.filter(
        (task) => task.id !== taskId,
      );
      currentTaskList.next([...currentTaskListWithoutTask]);

      nextTaskList.next([...nextTaskList.value, { ...currentTask }]);
    }
  }

  updateTaskNameAndDescription(
    taskId: string,
    taskCurrentStatus: TaskStatus,
    newTaskName: string,
    newTaskDescription: string,
  ) {
    const currentTaskList = this.getTaskListByStatus(taskCurrentStatus);
    const currentTaskIndex = currentTaskList.value.findIndex(
      (task) => task.id === taskId,
    );
    if (currentTaskIndex > -1) {
      const updatedTaskList = [...currentTaskList.value];
      updatedTaskList[currentTaskIndex] = {
        ...updatedTaskList[currentTaskIndex],
        name: newTaskName,
        description: newTaskDescription,
      };
      currentTaskList.next(updatedTaskList);
    }
  }

  updateTaskComments(
    taskId: string,
    taskStatus: TaskStatus,
    newTaskComments: IComment[],
  ) {
    const currentTaskList = this.getTaskListByStatus(taskStatus);
    const currentTaskIndex = currentTaskList.value.findIndex(
      (task) => task.id === taskId,
    );
    if (currentTaskIndex > -1) {
      const updatedTaskList = [...currentTaskList.value];
      updatedTaskList[currentTaskIndex] = {
        ...updatedTaskList[currentTaskIndex],
        comments: newTaskComments,
      };
      currentTaskList.next(updatedTaskList);
    }
  }

  deleteTask(taskId: string, taskCurrentStatus: TaskStatus) {
    const currentTaskList = this.getTaskListByStatus(taskCurrentStatus);
    const newTaskList = currentTaskList.value.filter(
      (task) => task.id !== taskId,
    );

    currentTaskList.next(newTaskList);
  }

  private loadTasksfromLocalStorage(key: string) {
    try {
      const storageTasks = localStorage.getItem(key);
      return storageTasks ? JSON.parse(storageTasks) : [];
    } catch (error) {
      console.error('Erro ao carregar tarefas do localStorage', error);
      return [];
    }
  }

  private saveTasksOnLocalStorage(key: string, tasks: ITask[]) {
    try {
      localStorage.setItem(key, JSON.stringify(tasks));
    } catch (error) {
      console.log('Erro ao salvar tarefas no localstorage', error);
    }
  }

  private getTaskListByStatus(
    taskStatus: TaskStatus,
  ): BehaviorSubject<ITask[]> {
    const taskListObj = {
      [TaskStatusEnum.TODO]: this.todoTasks$,
      [TaskStatusEnum.DOING]: this.doingTasks$,
      [TaskStatusEnum.DONE]: this.doneTasks$,
    };
    return taskListObj[taskStatus];
  }
}
