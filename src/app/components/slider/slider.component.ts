import { Component, Input, OnInit } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";
import { Subscription } from 'rxjs/Subscription';

import { Attribute } from "../../attr";

import { GeneralComponent } from "../general/general.component";
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'my-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
  // ,
  // providers: [PreviewService]
})

export class SliderComponent implements OnInit {

  @Input('text-label-slider') textLabelSlider:string;
  //@Input() attrNumber:number;
  @Input('attr-name') attrName:string;
  //attributes = new Attribute();
  @Input('value') sliderValue;
  
  @Input('min-value') minValue:number;
  @Input('max-value') maxValue:number;
  @Input('form') form: FormGroup;
  control: FormControl;
  //@Input ('active') active:boolean;
  
  //general: GeneralComponent;

  constructor(private previewService:PreviewService) {}

  ngOnInit() {
    this.control = new FormControl();
    if (this.form) {
      this.form.addControl(this.attrName, this.control);
      // console.log(this.form.value);
    }
  }

    getFormGroup() {
    if (this.form) {
      return this.form;
    } else {
      let arg = {};
      arg[this.attrName] = this.control;
      return new FormGroup(arg);
    }
    }


  setSliderValue(event: any) {
    //this.attributes.setAttrs(this.attrName)
    this.previewService.setValue(this.attrName, this.sliderValue);
    console.log("sliderValue: " + this.sliderValue);
    console.log("minValue: " + this.minValue);
    console.log("maxValue: " + this.maxValue);
  }

  /*active(active:boolean) {
    this.general.setOpacity(active);
  }*/
}
