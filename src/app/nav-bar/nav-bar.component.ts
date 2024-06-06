
import { Component, OnInit } from '@angular/core';
// import $ from 'jquery';
declare var $: any;
declare var originalContent:any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  originalContent = $('app-signup').clone();
  ngOnInit() {
    $('h1').hide();

    $('.click').click(function () {
      
      $('app-signup').hide();
      $('h1').show();
    });
    
    $('.unclick').click(function () {
      $('app-signup').show();
      $('h1').hide();

    });
  }


}
