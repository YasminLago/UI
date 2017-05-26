import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-general-text',
  templateUrl: './general-text.component.html',
  styleUrls: ['./general-text.component.css',
              '../../styles/buttonStyle.css']
})
export class GeneralTextComponent {

  @Input('gt-font-family-combo') gtFontFamilyCombo:boolean = true;
  @Input('gt-font-style-combo') gtFontStyleCombo:boolean = true;
  @Input('gt-font-weight-button') gtFontWeightButton:boolean = true;
  @Input('gt-size-slider') gtSizeSlider:boolean = true;
  @Input('gt-rotate') gtRotate:boolean = true;
  @Input('gt-opacity-slider') gtOpacitySlider:boolean = true;

  @Input('gt-perp-off-slider') gtPerpOffSlider:boolean = true;
  @Input('gt-position-slider') gtPositionSlider:boolean = true;
  @Input('gt-anchor-slider') gtAnchorSlider:boolean = true;

  fontStyle = [
                'Normal',
                'Italic',
                'Oblique'
              ];

  constructor() { }


  
}
