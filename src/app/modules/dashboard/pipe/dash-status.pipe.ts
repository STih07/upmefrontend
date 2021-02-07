import { Pipe, PipeTransform } from '@angular/core';
import { DashStatusState } from '../../../models/dashboard/dash-status-state.enum';
@Pipe({
    name: 'dashStatus',
})

export class DashStatusPipe implements PipeTransform {
    transform(status: DashStatusState) {
        if (status === DashStatusState.DONT_BEGIN) {
            return 'Не начато';
        }
        if (status === DashStatusState.IN_PROGRESS) {
            return 'В процессе';
        }
        if (status === DashStatusState.COMPLETE) {
            return 'Готово';
        }
    }
}
