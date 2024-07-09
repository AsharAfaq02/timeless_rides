import { Component, OnInit } from '@angular/core';
// import $ from 'jquery';
declare var $: any;
declare var signupButton:any;
declare var logoutButton:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

isLoggedin =  localStorage.getItem('isLoggedin')?.toString();


constructor(){}
signupButton = $('app-signup').clone();
logoutButton = $('app-logout-button').clone();
ngOnInit(){
  

  if(this.isLoggedin == 'true'){
    console.log('log bool is true')
      $('app-signup').hide();
      $('app-logout-button').show();

  }else{
   $('app-logout-button').hide();
   $('app-signup').show();
  }
}


}