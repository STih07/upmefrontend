import { Component, OnInit } from '@angular/core';
import { DirectionService } from '../../services/direction.service';
import { ListDirection } from '../../../../models/direction/list-direction';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProjectComponent } from 'src/app/modals/add-project/add-project.component';

@Component({
  selector: 'upme-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  directions: ListDirection[];

  selected: Set<ListDirection> = new Set<ListDirection>();

  constructor(
    private directionService: DirectionService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.directionService.getAll().subscribe(
      directions => this.directions = directions
    );
  }

  openArchiveModal() {
    const selectedDirections: Array<ListDirection> = Array.from(this.selected);
  }

  openAddProject() {
    const modalRef = this.modalService.open(AddProjectComponent);
  }

  select(direction: ListDirection): void {
    if (this.selected.has(direction)) {
      this.selected.delete(direction);
    } else {
      this.selected.add(direction);
    }
  }

  isSelected(direction: ListDirection): boolean {
    return this.selected.has(direction);
  }

  delete(direction: ListDirection): void {
    this.directionService.delete(direction).subscribe();
  }

  deleteDirection(direction: any): void {
    this.directions = this.directions.filter(user => user.id !== direction.id);
  }

}
