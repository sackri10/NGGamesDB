import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import {catchError} from 'rxjs/operators';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor
{
  constructor(){

  }
  intercept(req:HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>
  {
     req=req.clone({
       setHeaders:{
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'Ap559lY3E6mshMXJhUgK6KHE0Wlnp1Qqccxjsnfc1y7PIJ6Pad'
       },
       setParams:{
         key:'e78ea916465b4a25b52eeb07a62fb484'
       }
     })
     return next.handle(req);
  }
}
