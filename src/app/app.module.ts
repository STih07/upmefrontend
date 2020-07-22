import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgProgressModule } from 'ngx-progressbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskStatusPipe } from './status.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TaskStatusPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgProgressModule.withConfig({
      color: '#8492a6',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
