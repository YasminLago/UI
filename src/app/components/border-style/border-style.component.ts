import { Component, Input } from '@angular/core';

@Component({
  selector: 'border-style',
  templateUrl: './border-style.component.html',
  styleUrls: ['./border-style.component.css',
              '../../styles/buttonStyle.css']
})

export class BorderStyleComponent {
  
  @Input() textLbl:string;
  @Input() textLabelCheckBox:string;

  @Input() lbl:boolean = true;
  @Input() check:boolean = true;
  @Input() combo:boolean = true; 
  @Input() widthSlider:boolean = true;
  @Input() opacitySlider:boolean = true;
  @Input() separationSlider:boolean = true;
  @Input() positionSlider:boolean = true;
  @Input() distanceSlider:boolean = true;
  @Input() sizeSlider:boolean = true;
  @Input() colorButton:boolean = true;
  @Input() image:boolean = true;
  @Input() rotate:boolean = true;

  constructor() { }

  visible():boolean {
    return false;
  }
  hide():boolean {
    return true;
  }
}
