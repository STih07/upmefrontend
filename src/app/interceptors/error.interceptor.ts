import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { AuthService } from '../modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(() => req.clone()),
      catchError(err => this.navigateError(err, req, next))
    );
  }

  private navigateError(err: HttpErrorResponse, req, next): Observable<HttpEvent<any>> {
    switch (err.status) {
      case 403:
        return this.handle403(req, next);
      case 404:
        return this.handle404(req, next);
      case 500:
        return this.handle500(req, next);
      default:
        return throwError(err);
    }
  }

  private handle403(req, next): Observable<any> {
    return of(this.router.navigateByUrl('/auth/login'));
  }

  private handle404(req, next): Observable<any> {
    return of(this.router.navigateByUrl('/404'));
  }

  private handle500(req, next): Observable<any> {
    return of(this.toastr.error('Ой! Произошло что-то очень плохое!', '', {
      timeOut: 5000,
      toastClass: 'ngx-toastr custom-fs-12'
    }));
  }
}
