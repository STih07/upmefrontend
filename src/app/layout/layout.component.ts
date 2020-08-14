import { Component } from '@angular/core';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  progressRef: NgProgressRef;
  response: any;

  mainUser = {
    name: 'Anna D.',
    icon: 'assets/img/user_img.png'
  };

  constructor(private ngProgress: NgProgress) {
  }

}
