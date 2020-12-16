import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Filter } from '../../../models/filter';

@Component({
  selector: 'upme-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent implements OnInit {

  @Input() filters: Filter;

  constructor() { }

  ngOnInit(): void {
  }

}
