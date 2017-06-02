import { Component, Input, OnInit } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";
import { PreviewComponent } from "../preview/preview.component";

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Forms } from "../../forms.class";

@Component({
  selector: 'my-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent extends Forms implements OnInit {

  @Input('text-label-checkbox') textLabelCheckBox: string;
  @Input('is-check') isCheck: boolean;
  @Input('attr-name') attrName: string;
  @Input('parent-form') parentForm: FormGroup;
  parentControl: FormControl;

  //f: Forms;

  constructor(private previewService: PreviewService) {
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




  /*activeBorder(){
    this.previewService.setValue(this.attrName,this.isCheck);
    console.log("Atributo en Check:  " + this.isCheck);
    console.log("Check en Check:  " + this.isCheck);
    if(this.isCheck == true) {
      this.previewService.setWidth(5);
    }
  }*/

}
