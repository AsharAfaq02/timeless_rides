import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
declare const sayhello: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  User = localStorage.getItem('login')?.toString();
  isLoggedin = localStorage.getItem('isLoggedin')?.toString();
  
}



