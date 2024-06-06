import { Component } from '@angular/core';
import { Cars } from '../cardata';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  timeline = Cars;
}
