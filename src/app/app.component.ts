
import { Component} from '@angular/core';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent{

  loggedIn: boolean;
  //display background image when initialized (referenced in styles.scss)
  ngOnInit() {
    document.body.className = "selector";

  }


  title = 'timeless_rides';


}
