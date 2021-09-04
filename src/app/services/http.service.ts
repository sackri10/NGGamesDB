import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../model';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {


  }
  getList(ordering :string,search?: string):Observable<APIResponse<Game>>
    {
      let params= new HttpParams().set('ordering',ordering);
      if(search)
      {
        params.append('search','search');
      }
      return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{params:params,});
    }

    getGameDetails(id:string):Observable<Game>{
      const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
      const gameTrailersRequest = this.http.get(`${env.BASE_URL}/games/${id}/movies`);
      const gameScreenshotRequest = this.http.get(`${env.BASE_URL}/games/${id}/screenshots`);

      return forkJoin(
        {
          gameInfoRequest,gameScreenshotRequest,gameTrailersRequest
        }
      ).pipe(
        map((resp:any)=>{
          return {...resp['gameInfoRequest'],
          screenshots:resp['gameScreenshotRequest']?.results,
          trailers:resp['gameTrailersRequest']?.results
        }
        })
      )

    }
}
