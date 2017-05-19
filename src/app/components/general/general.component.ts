import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css',
              '../../styles/buttonStyle.css']
})
export class GeneralComponent {

  @Input('g-symbol-combo') gSymbolCombo:boolean = true;
  @Input('g-type-combo') gTypeCombo:boolean = true;
  @Input('g-width-slider') gWidthSlider:boolean = true;
  @Input('g-opacity-slider') gOpacitySlider:boolean = true;
  @Input('g-separation-slider') gSeparationSlider:boolean = true;
  @Input('g-position-slider') gPositionSlider:boolean = true;
  @Input('g-distance-slider') gDistanceSlider:boolean = true;
  @Input('g-size-slider') gSizeSlider:boolean = true;
  @Input('g-rotate') gRotate:boolean = true;
  @Input('g-image') gImage:boolean = true;

  constructor() { }


}
