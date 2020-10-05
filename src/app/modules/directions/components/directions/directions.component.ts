import { Component, OnInit } from '@angular/core';
import {DirectionService} from '../../services/direction.service';
import {ListDirection} from '../../../../models/direction/list-direction';

@Component({
  selector: 'upme-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  directions: ListDirection[];

  selected: Set<number> = new Set<number>();

  constructor(
    private directionService: DirectionService
  ) { }

  ngOnInit(): void {
    this.directionService.getAll().subscribe(
      directions => this.directions = directions
    );
  }

  openArchiveModal() {

  }

  select(direction: ListDirection) {
    const { id } = direction;
    if (this.selected.has(id)) {
      this.selected.delete(id);
    } else {
      this.selected.add(id);
    }
  }

  isSelected(direction: ListDirection) {
    return this.selected.has(direction.id);
  }

  delete(direction: ListDirection) {
    this.directionService.delete(direction).subscribe();
  }
}
