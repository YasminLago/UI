import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css',
              '../../styles/buttonStyle.css']
})
export class GeneralComponent {

  @Input() gSymbolCombo:boolean = true;
  @Input() gTypeCombo:boolean = true;
  @Input() gWidthSlider:boolean = true;
  @Input() gOpacitySlider:boolean = true;
  @Input() gSeparationSlider:boolean = true;
  @Input() gPositionSlider:boolean = true;
  @Input() gDistanceSlider:boolean = true;
  @Input() gSizeSlider:boolean = true;
  @Input() gRotate:boolean = true;
  @Input() gImage:boolean = true;

  constructor() { }

}
