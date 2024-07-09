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
  searchCar(data: any){
    return this.httpClient.post(`${this.url}/searchCar`, data);
  }
}

