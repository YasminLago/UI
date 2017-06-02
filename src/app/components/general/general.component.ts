import { Component, Input, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { PointTabComponent } from "../point-tab/point-tab.component";

import { XMLService } from "../../services/XMLService";

import { Forms } from "../../forms.class";


@Component({
  selector: 'my-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css',
              '../../styles/buttonStyle.css']
})
export class GeneralComponent extends Forms implements OnInit {

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


  public generalForm: FormGroup;
  parentControl: FormControl;

  @Input('attr-name') attrName:string;
  @Input('parent-form') parentForm: FormGroup;
  
  constructor(private xmlService: XMLService) { 
     super();
     this.generalForm = new FormGroup({});
     this.generalForm.valueChanges.subscribe((value: any) => {
     //console.log('valuechangesgeneral',value);
     if(value){
        xmlService.setXMLValues(value);
      }
    });
  }

  ngOnInit() {
    this.setForm(this.parentForm);
    this.setAttrName(this.attrName);

    this.parentControl = new FormControl();
    if (this.parentForm) {
      this.parentForm.addControl(this.attrName, this.parentControl);
    }
    this.setControl(this.parentControl);
  }


 /* setOpacity(value:boolean){
    this.pointTab.activeOpacity(value);
  }*/

}
