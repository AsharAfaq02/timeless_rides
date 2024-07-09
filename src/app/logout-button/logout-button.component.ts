import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.scss'
})
export class LogoutButtonComponent{

  logoutButton(){
    localStorage.setItem('isLoggedin', 'false')
    localStorage.removeItem('login')
    window.location.reload();
  }

}