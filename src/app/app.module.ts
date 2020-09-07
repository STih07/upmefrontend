import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { NgProgressModule } from 'ngx-progressbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { Page404Component } from './page404/page404.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';
import { SubmitModalComponent } from './modals/submit-modal/submit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgProgressModule.withConfig({
      color: '#8492a6',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    EditModalComponent,
    SubmitModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
