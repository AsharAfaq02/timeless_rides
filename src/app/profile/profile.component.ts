import { Component } from '@angular/core';

declare const sayhello: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

heythere = sayhello();


}
