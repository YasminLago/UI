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
  @Input('form') form: FormGroup;
  control: FormControl;

  forms = new Forms(this.form, this.attrName, this.control);
  

  constructor(private previewService: PreviewService, 
                      form:FormGroup, 
                      attrName:string, 
                      control: FormControl) {
    // super(form, attrName, control);
    // this.form = form;
    // this.attrName = attrName;
    // this.control = control;
    // this.forms.getFormGroup();
   }

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



  /*activeBorder(){
    this.previewService.setValue(this.attrName,this.isCheck);
    console.log("Atributo en Check:  " + this.isCheck);
    console.log("Check en Check:  " + this.isCheck);
    if(this.isCheck == true) {
      this.previewService.setWidth(5);
    }
  }*/

}
