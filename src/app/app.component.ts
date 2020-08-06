import { Component, ViewChild, OnInit } from '@angular/core';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  progressRef: NgProgressRef;
  response: any;

  mainUser = {
    name: 'Anna D.',
    icon: 'assets/img/user_img.png'
  };

  constructor(private ngProgress: NgProgress) { }

}
