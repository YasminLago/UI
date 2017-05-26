import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-point-tab',
  templateUrl: './point-tab.component.html',
  styleUrls: ['./point-tab.component.css']
})
export class PointTabComponent {

  @Input()opacityActive:boolean;


  constructor() { }

  activeOpacity(value:boolean){
    this.opacityActive = value;
    console.log(this.opacityActive);
  }
}
