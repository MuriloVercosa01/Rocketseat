import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IComment } from '../../interfaces/comment.interface';
import { genarateUniqueIdWithTimestamp } from '../../utils/generate-unique-id-with-timestamp';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-comments-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-comments-modal.component.html',
  styleUrl: './task-comments-modal.component.css',
})
export class TaskCommentsModalComponent {
  taskCommentChanged: boolean = false;
  commentControl = new FormControl('', [Validators.required]);

  @ViewChild('commentInput') commentInputRef!: ElementRef<HTMLInputElement>;

  readonly _task: ITask = inject(DIALOG_DATA);
  readonly _dialogRef: DialogRef<Boolean> = inject(DialogRef);

  onAddComment() {
    const newComment: IComment = {
      id: genarateUniqueIdWithTimestamp(),
      description: this.commentControl.value ? this.commentControl.value : '',
    };
    this._task.comments.unshift(newComment);
    this.commentControl.reset();
    this.taskCommentChanged = true;

    //focando no elemento de input
    this.commentInputRef.nativeElement.focus();
  }

  onRemoveComment(commentId: string) {
    this._task.comments = this._task.comments.filter(
      (comment) => comment.id != commentId,
    );

    this.taskCommentChanged = true;
  }

  onCloseModal() {
    this._dialogRef.close(this.taskCommentChanged);
  }
}
