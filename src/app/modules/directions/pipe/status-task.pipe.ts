import { Pipe, PipeTransform } from '@angular/core';
import { DirectionTaskStatus } from '../../../models/direction-task-state.enum';

@Pipe({
    name: 'taskStatus',
})

export class TaskStatus implements PipeTransform {
    transform(status: DirectionTaskStatus) {
        switch (status) {
            case 0:
              return 'Ожидает проверки';
            case 1:
              return 'В работе';
            case 2:
              return 'Проверено';
        }
    }
}
