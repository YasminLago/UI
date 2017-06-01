import { Component, Input, OnInit } from '@angular/core';
//import {ColorPickerService} from 'angular2-color-picker';

import { PreviewService } from "../../services/PreviewService";
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'my-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.css',
              '../../styles/buttonStyle.css'],
})
export class ColorButtonComponent implements OnInit{

  @Input('attr-name') attrName:string;
  @Input('border-form') borderForm: FormGroup;
  private color: string = "#1f618d";
  control: FormControl;
  @Input('general-form') generalForm: FormGroup;
  generalControl: FormControl;

  constructor(private previewService:PreviewService) { }


    getFormGroup() {
      if (this.borderForm) {
        return this.borderForm;
      } else {
        let arg = {};
        arg[this.attrName] = this.control;
        return new FormGroup(arg);
      }
    }

  ngOnInit() {
    this.control = new FormControl();
    if (this.borderForm){
        this.borderForm.addControl(this.attrName, this.control);
    }
  }


  colorPicker() {
    this.previewService.setValue(this.attrName, this.color);
    console.log("color en color button"+this.color);
    console.log(this.attrName);
  }

}
