import { Component, Input, OnInit } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";
import { PreviewComponent } from "../preview/preview.component";

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
 import { Forms } from "../../forms";

@Component({
  selector: 'my-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input('text-label-checkbox') textLabelCheckBox: string;
  @Input('is-check') isCheck: boolean;
  @Input('attr-name') attrName: string;
  @Input('border-form') borderForm: FormGroup;
  borderControl: FormControl;
  @Input('general-form') generalForm: FormGroup;
  generalControl: FormControl;

  constructor(private previewService: PreviewService) {
    // super(form, attrName, control);
    // this.form = form;
    // this.attrName = attrName;
    // this.control = control;
    // this.forms.getFormGroup();
   }

  ngOnInit() {
    this.borderControl = new FormControl();
    if (this.borderForm) {
      this.borderForm.addControl(this.attrName, this.borderControl);
      // console.log(this.form.value);
    }
  }

  getFormGroup() {
    if (this.borderForm) {
      return this.borderForm;
    } else {
      let arg = {};
      arg[this.attrName] = this.borderControl;
      return new FormGroup(arg);
    }
  }



  /*activeBorder(){
    this.previewService.setValue(this.attrName,this.isCheck);
    console.log("Atributo en Check:  " + this.isCheck);
    console.log("Check en Check:  " + this.isCheck);
    if(this.isCheck == true) {
      this.previewService.setWidth(5);
    }
  }*/

}
