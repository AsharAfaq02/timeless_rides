import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//page imports
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { TopicsComponent } from './topics/topics.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';

//routes to different pages
const routes: Routes = [
  {
    component:ProfileComponent,
    path:'profile'
  },
  {
    component:TimelineComponent,
    path:'timeline'
  },
  {
    component:MarketplaceComponent,
    path:'shop'
  },
  {
    component:DiscussionComponent,
    path:'discussion'
  },
  {
    component:NewsComponent,
    path:'news'
  },
  {
    component:TopicsComponent,
    path:'topics'
  },
  
  {
    component:HomeComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
