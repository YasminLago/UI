import { Component, Input, OnInit } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";
import { PreviewComponent } from "../preview/preview.component";

import { SliderComponent } from "../slider/slider.component";
import { PointTabComponent } from "../point-tab/point-tab.component";
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'my-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  inputs: [ 'activeOpacity : active-opacity' ]
})
export class ImageComponent implements OnInit{

  @Input('attr-name') attrName:string;
  @Input() externalImage:string;
  @Input('border-form') borderForm: FormGroup;

  activeOpacity:SliderComponent;
  control: FormControl;
  @Input('general-form') generalForm: FormGroup;
  generalControl: FormControl;


  constructor(private previewService:PreviewService) { }

  ngOnInit() {
    this.control = new FormControl();
    if (this.borderForm) {
      this.borderForm.addControl(this.attrName, this.control);
      // console.log(this.form.value);
    }
  }

  public createImage() {
     this.previewService.setValue(this.attrName,this.externalImage);
     if (this.externalImage != "") {
        this.previewService.setExternalImage(true);
     } else {
        this.previewService.setExternalImage(false);
     }
  }
    getFormGroup() {
      if (this.borderForm) {
        return this.borderForm;
      } else {
        let arg = {};
        arg[this.attrName] = this.control;
        return new FormGroup(arg);
      }
    }


  public dropImage() {
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
