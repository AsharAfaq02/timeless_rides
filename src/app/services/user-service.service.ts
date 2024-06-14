import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = "http://192.168.86.51:8080";
  constructor(private httpClient: HttpClient) { }

  createPost(data: any){
    return this.httpClient.post(`${this.url}/signup`, data);
  }
  login_submit(data: any){
    return this.httpClient.post(`${this.url}/login`, data);
  }
}

