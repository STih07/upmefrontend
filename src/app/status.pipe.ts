import { Pipe, PipeTransform } from '@angular/core';

enum TestTaskState {
    IN_PROGRESS = 0,
    DONE = 1
  }

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
