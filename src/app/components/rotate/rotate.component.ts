import { Component, Input, OnInit } from '@angular/core';
import { PreviewService } from "../../services/PreviewService";

import { Forms } from "../../forms.class";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'my-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.css',
              '../../styles/buttonStyle.css']
})
export class RotateComponent extends Forms implements OnInit {

  @Input('attr-name') attrName:string;
  @Input('rotate-value') rotateValue: number = 0;

  @Input('parent-form') parentForm: FormGroup;
  parentControl: FormControl;
  
  constructor(private previewService:PreviewService) {
    super();
   }

   ngOnInit() {
    this.setForm(this.parentForm);
    //console.log("Parent form rotate",this.parentForm);
    this.setAttrName(this.attrName);

    this.parentControl = new FormControl();
    if (this.parentForm) {
      this.parentForm.addControl(this.attrName, this.parentControl);
    }
    this.setControl(this.parentControl);
  }

  rotateLeftValue() {
    this.rotateValue--;
    this.previewService.setValue(this.attrName, this.rotateValue);
   // console.log("text attr: " + this.attrName);
   // console.log("RotateValue1: " + this.rotateValue);
  }

  rotateRightValue() {
    this.rotateValue++;
    this.previewService.setValue(this.attrName, this.rotateValue);
   // console.log("text attr: " + this.attrName);
    //console.log("RotateValue2: " + this.rotateValue);
  }

  rotateInputValue() {
      this.previewService.setValue(this.attrName, this.rotateValue);
     // console.log("text attr: " + this.attrName);
     // console.log("Rotatevalue3: " + this.rotateValue);
  }
}
