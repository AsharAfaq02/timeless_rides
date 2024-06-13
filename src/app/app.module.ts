import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule} from '@angular/material/icon';
import{ MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CarouselComponent } from './carousel/carousel.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MenuOptionsComponent } from './menu-options/menu-options.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import {MatMenuModule} from '@angular/material/menu';
import { TimelineComponent } from './timeline/timeline.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { TopicsComponent } from './topics/topics.component';
import { NewsComponent } from './news/news.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms'
import { DataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    MenuOptionsComponent,
    MenuButtonComponent,
    TimelineComponent,
    MarketplaceComponent,
    DiscussionComponent,
    ProfileComponent,
    HomeComponent,
    TopicsComponent,
    NewsComponent,
    SignupComponent,


  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }



