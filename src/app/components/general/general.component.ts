import { Component, Input } from '@angular/core';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { PointTabComponent } from "../point-tab/point-tab.component";

@Component({
  selector: 'my-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css',
              '../../styles/buttonStyle.css']
})
export class GeneralComponent {

  @Input('show-g-symbol-combo') gSymbolCombo:boolean = true;
  @Input('show-g-type-combo') gTypeCombo:boolean = true;
  @Input('show-g-width-slider') gWidthSlider:boolean = true;
  @Input('show-g-opacity-slider') gOpacitySlider:boolean = true;
  @Input('show-g-separation-slider') gSeparationSlider:boolean = true;
  @Input('show-g-position-slider') gPositionSlider:boolean = true;
  @Input('show-g-distance-slider') gDistanceSlider:boolean = true;
  @Input('show-g-size-slider') gSizeSlider:boolean = true;
  @Input('show-g-rotate') gRotate:boolean = true;
  @Input('show-g-image') gImage:boolean = true;

//  pointTab:PointTabComponent;
  public generalForm: FormGroup;
  
  constructor() { 
     this.generalForm = new FormGroup({});
     this.generalForm.valueChanges.subscribe((value: any) => {
     console.log('valuechangesgeneral',value);
    });
  }

 /* setOpacity(value:boolean){
    this.pointTab.activeOpacity(value);
  }*/

}
