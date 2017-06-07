import { Component, Input, OnInit } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";
import { Subscription } from 'rxjs/Subscription';

import { Attribute } from "../../attr";

import { GeneralComponent } from "../general/general.component";
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

import { Forms } from "../../forms.class";


@Component({
  selector: 'my-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
  // ,
  // providers: [PreviewService]
})

export class SliderComponent extends Forms implements OnInit {

  @Input('text-label-slider') textLabelSlider:string;
  //@Input() attrNumber:number;
  @Input('attr-name') attrName:string;
  //attributes = new Attribute();
  @Input('value') sliderValue;
  
  @Input('min-value') minValue:number;
  @Input('max-value') maxValue:number;
  @Input('parent-form') parentForm: FormGroup;
  parentControl: FormControl;
  //@Input ('active') active:boolean;
  
  //general: GeneralComponent;

  constructor(private previewService:PreviewService) {
    super();
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


  setSliderValue(event: any) {
    //this.attributes.setAttrs(this.attrName)
    this.previewService.setValue(this.attrName, this.sliderValue);
  }

  /*active(active:boolean) {
    this.general.setOpacity(active);
  }*/
}
