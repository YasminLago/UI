import { Component, Input, OnInit } from '@angular/core';
//import {ColorPickerService} from 'angular2-color-picker'; 

import { PreviewService } from "../../services/PreviewService";
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Forms } from "../../forms.class";


@Component({
  selector: 'my-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.css',
              '../../styles/buttonStyle.css'],
})
export class ColorButtonComponent extends Forms implements OnInit{

  @Input('attr-name') attrName:string;
  private color: string = "#1f618d";
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


  colorPicker() {
    this.previewService.setValue(this.attrName, this.color);
  }

}
