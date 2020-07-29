import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgProgressModule } from 'ngx-progressbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskStatusPipe } from './status.pipe';
import { RoundPipe } from './round.pipe';

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
    NgProgressModule.withConfig({
      color: '#1296F3',
      thick: true,
      spinner: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
