import { Component, Input } from '@angular/core';

@Component({
  selector: 'border-style',
  templateUrl: './border-style.component.html',
  styleUrls: ['./border-style.component.css',
              '../../styles/buttonStyle.css']
})

export class BorderStyleComponent {
  
  @Input('text-label') textLbl:string;

  @Input('lbl') lbl:boolean = true;
  @Input('check') check:boolean = true;
  @Input('combo') combo:boolean = true; 
  @Input('width-slider') widthSlider:boolean = true;
  @Input('opacity-slider') opacitySlider:boolean = true;
  @Input('separation-slider') separationSlider:boolean = true;
  @Input('position-slider') positionSlider:boolean = true;
  @Input('distance-slider') distanceSlider:boolean = true;
  @Input('size-slider') sizeSlider:boolean = true;
  @Input('color-button') colorButton:boolean = false;
  @Input('image') image:boolean = true;
  @Input('rotate') rotate:boolean = true;

  constructor() { }

  visible():boolean {
    return false;
  }
  hide():boolean {
    return true;
  }
}
