import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiYXMuZGlsaGFuNDlAZ21haWwuY29tIiwiZnVsbE5hbWUiOiJEaWxoYW4gQkFTIiwiZXhwIjoxNzgyMDc5NzcyLCJ1c2VySWQiOjIsImlhdCI6MTc4MTM1OTc3MiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XX0.KvIheQ7LZmCkJjzfzKTqzNlUYGCfjfEm8r4MdTiEfvQ';
    if(token !== undefined && token !== null){
      //assigner le token;
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization : 'Bearer ' + token
        })
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
