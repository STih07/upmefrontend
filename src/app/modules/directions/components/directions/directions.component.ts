import { Component, OnInit } from '@angular/core';
import { DirectionService } from '../../services/direction.service';
import { ListDirection } from '../../../../models/direction/list-direction';

@Component({
  selector: 'upme-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  directions: ListDirection[];

  selected: Set<ListDirection> = new Set<ListDirection>();

  constructor(
    private directionService: DirectionService
  ) { }

  ngOnInit(): void {
    this.directionService.getAll().subscribe(
      directions => this.directions = directions
    );
  }

  openArchiveModal() {
    const selectedDirections: Array<ListDirection> = Array.from(this.selected);
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
}
