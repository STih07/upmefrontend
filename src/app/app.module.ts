import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgProgressModule } from 'ngx-progressbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskStatusPipe } from './status.pipe';
import { RoundPipe } from './round.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TaskStatusPipe,
    RoundPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgProgressModule.withConfig({
      color: '#8492a6',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
