import { Component, OnInit } from '@angular/core';
import { Resident } from 'src/app/models/residents/resident';
import { ResidentsService } from '../../services/residents/residents.service';

@Component({
  selector: 'upme-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent implements OnInit {

  residents: Resident[];
  hovered: boolean;

  constructor(private residentService: ResidentsService) { }

  ngOnInit(): void {
    this.residentService.getAll().subscribe(residents => {
      this.residents = residents;
      this.residents.forEach(resident => resident.hovered = false);
    });
  }

}
