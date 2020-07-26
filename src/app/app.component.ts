import { Component, OnInit } from '@angular/core';
import { FakeHttpClientService } from './services/fake-http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  user: any ;

  arrayOfDays: number[] = Array(7).fill(0).map((x, i) => i);

  constructor(private fakeResponse: FakeHttpClientService) {}

  ngOnInit() {
    this.fakeResponse.get(this.user).subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

  getPercentOfDiffrence(num1: number, num2: number) {
    return((num1 - num2) * 100 / num1);
  }

}
