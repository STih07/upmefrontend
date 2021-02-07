import { Component } from '@angular/core';
import { NgProgressRef } from 'ngx-progressbar';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  progressRef: NgProgressRef;

  constructor() { }
}
