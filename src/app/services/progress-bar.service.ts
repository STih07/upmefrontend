import { Injectable } from '@angular/core';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';

@Injectable({
  providedIn: 'root'
})
export class Progress {
  private progressRef = this.progress.ref('progressBar');

  constructor(private progress: NgProgress) { }

  start() {
    return this.progressRef.start();
  }

  complete() {
    return this.progressRef.complete();
  }

  setConfig() {
    return this.progressRef.setConfig({ color: 'red' });
  }
}
