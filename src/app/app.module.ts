import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { NgProgressModule } from 'ngx-progressbar';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from './interceptors/error.interceptor';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { Page404Component } from './page404/page404.component';
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';
import { SubmitModalComponent } from './modals/submit-modal/submit-modal.component';
import { EditProfileModalComponent } from './modals/edit-profile-modal/edit-profile-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolutionModalComponent } from './modals/solution-modal/solution-modal.component';
import { ArchiveModalComponent } from './modals/archive-modal/archive-modal.component';
import { AddProjectComponent } from './modals/add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Page404Component,
    EditProfileModalComponent,
    SolutionModalComponent,
    ArchiveModalComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgProgressModule.withConfig({
      color: '#1296F3',
      thick: true,
      spinner: false
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
    SubmitModalComponent,
    EditProfileModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
