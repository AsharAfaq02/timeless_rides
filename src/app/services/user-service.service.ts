import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = "http://localhost:8080/users";
  constructor(private httpClient: HttpClient) { }

  createPost(data: any){
    return this.httpClient.post(this.url, data);
  }
}

