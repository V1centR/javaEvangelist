import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  LC_API:string = "http://localhost:8080/post";

  constructor(private http: HttpClient) { }

  findHomeList(page:string ): Observable<any> {
    console.log(`${page}`);
    return this.http.get(`${this.LC_API}/latest/${page}`);
  }


}
