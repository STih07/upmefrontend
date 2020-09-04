import { Pipe, PipeTransform } from '@angular/core';
import { DirectionTaskStatus } from '../../../models/direction-task-state.enum';

@Pipe({
    name: 'taskStatus',
})

export class TaskStatus implements PipeTransform {
    transform(status: DirectionTaskStatus) {
        if (status === DirectionTaskStatus.AWAIT) {
            return 'Ожидает проверки';
        }
        if (status === DirectionTaskStatus.IN_PROGRESS) {
            return 'В работе';
        }
        if (status === DirectionTaskStatus.CHECKED) {
            return 'Проверено';
        }
    }
}
