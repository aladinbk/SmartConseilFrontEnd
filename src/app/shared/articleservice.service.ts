import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../article';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleserviceService {
  //BaseURL
  private apiServerUrl= environment.BaseUrl;

  constructor(public http: HttpClient) { }
  //GET Article
  public getArticles(): Observable<Article>{
    return this.http.get<Article>(`${this.apiServerUrl}/read.php`);
  } 
  //GET Article ByID
  public getArticlesbyId(id:Number): Observable<Article>{
     return this.http.get<Article>(`${this.apiServerUrl}/read_single.php?{$id}`);
  } 


}
