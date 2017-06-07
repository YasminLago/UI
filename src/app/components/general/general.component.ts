import { Component, 
         Input, 
         Output, 
         OnInit, 
         EventEmitter } from '@angular/core';
import { FormControl, 
         FormGroup, 
         Validators, 
         FormBuilder } from '@angular/forms';
         
import { PointTabComponent } from "../point-tab/point-tab.component";
import { XMLService } from "../../services/XMLService";
import { Forms } from "../../forms.class";

@Component({
  selector: 'my-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css',
    '../../styles/buttonStyle.css']
})

export class GeneralComponent extends Forms {

  @Input('show-g-symbol-combo') gSymbolCombo: boolean = true;
  @Input('show-g-type-combo') gTypeCombo: boolean = true;
  @Input('show-g-width-slider') gWidthSlider: boolean = true;
  @Input('show-g-opacity-slider') gOpacitySlider: boolean = true;
  @Input('show-g-separation-slider') gSeparationSlider: boolean = true;
  @Input('show-g-position-slider') gPositionSlider: boolean = true;
  @Input('show-g-distance-slider') gDistanceSlider: boolean = true;
  @Input('show-g-size-slider') gSizeSlider: boolean = true;
  @Input('show-g-rotate') gRotate: boolean = true;
  @Input('show-g-image') gImage: boolean = true;

  generalForm: FormGroup;
  parentControl: FormControl;

  @Input('attr-name') attrName: string;
  @Input('parent-form') parentForm: FormGroup;
  @Output('onFormGroupChange') onFormGroupChange: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() {
    super();
    this.generalForm = new FormGroup({});
    this.generalForm.valueChanges.subscribe((value: any) => {
      this.onFormGroupChange.emit({ id: this.attrName, values: this.generalForm.value });
    });
  }

  /* setOpacity(value:boolean){
     this.pointTab.activeOpacity(value);
   }*/
}
