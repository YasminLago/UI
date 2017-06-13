import { Component, Input, OnInit } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";

import { PreviewComponent } from "../preview/preview.component";

import { SliderComponent } from "../slider/slider.component";
import { PointTabComponent } from "../point-tab/point-tab.component";
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Forms } from "../../forms.class";


@Component({
  selector: 'my-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  inputs: [ 'activeOpacity : active-opacity' ]
})
export class ImageComponent extends Forms implements OnInit{

  @Input('attr-name') attrName:string;
  @Input() externalImage:string;

  activeOpacity: SliderComponent;
  @Input('parent-form') parentForm: FormGroup;
  parentControl: FormControl;

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

  createImage() {
     this.previewService.setValue(this.attrName,this.externalImage);
     if (this.externalImage != "") {
        this.previewService.setExternalImage(true);
     } else {
        this.previewService.setExternalImage(false);
     }
  }
    
  dropImage() {
    this.externalImage = "";
    this.previewService.setValue(this.attrName,this.externalImage);
    this.previewService.setExternalImage(false);
  }

 /* public activeOpac() {
    if (this.externalImage != "") {
      this.activeOpacity.active(true);
    } else {
      this.activeOpacity.active(false);
    }
  }*/

}
