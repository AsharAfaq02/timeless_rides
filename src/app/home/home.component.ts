import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  signup_username: string = '';
  signup_email: string = '';
  signup_password: string = '';
  signup_reenter_password: string = '';

 
}