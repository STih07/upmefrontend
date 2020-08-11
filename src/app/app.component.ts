import { Component, OnInit } from '@angular/core';
import { FakeHttpClient } from './services/fake-http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  mainUser = {
    name: 'Anna D.',
    icon: 'assets/img/user_img.png'
  };


}
