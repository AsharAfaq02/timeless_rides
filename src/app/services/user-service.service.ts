import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  searchCarSubmit(search_form: any) {
    throw new Error('Method not implemented.');
  }

  private url = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  createPost(data: any){
    return this.httpClient.post(`${this.url}/signup`, data);
  }
  login_submit(data: any){
    return this.httpClient.post(`${this.url}/login`, data);
  }

  getCar_wiki(year : any, make : any, model : any): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/info_cars?year=${year}&make=${make}&model=${model}`, { responseType: 'text' as 'json' });
  }
}

