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


  @ViewChild('solution') solutionRef: any ;
    scrollToTop() {
      setTimeout(() => {
        this.solutionRef.nativeElement.classList.add('heartbeat');
      }, 0);
      this.solutionRef.nativeElement.classList.remove('heartbeat');
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

}
