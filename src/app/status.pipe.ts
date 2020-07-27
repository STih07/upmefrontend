import { Pipe, PipeTransform } from '@angular/core';
import { TestTaskState } from './models/test-task-state.enum';
@Pipe({
  name: 'taskStatus',
})

export class TaskStatusPipe implements PipeTransform {
  transform(status: TestTaskState) {
    if (status === TestTaskState.DONE) {
      return 'DONE';
    }
    if (status === TestTaskState.IN_PROGRESS) {
        return 'IN PROGRESS';
      }
  }
}
