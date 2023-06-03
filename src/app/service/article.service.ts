import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  LC_API:string = "http://localhost:8080/article";

  constructor(private http: HttpClient) { }

  getArticleById(id:string ): Observable<any> {
    console.log(`${id}`);
    return this.http.get(`${this.LC_API}/open/${id}`);
  }
}
