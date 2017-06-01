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
  @Input('form') form: FormGroup;
  private color: string = "#1f618d";
  control: FormControl;

  constructor(private previewService:PreviewService) { }


    getFormGroup() {
    if (this.form) {
      return this.form;
    } else {
      let arg = {};
      arg[this.attrName] = this.control;
      return new FormGroup(arg);
    }
    }

  ngOnInit() {
    this.control = new FormControl();
    if (this.form){
        this.form.addControl(this.attrName, this.control);
    }
  }


  colorPicker() {
    this.previewService.setValue(this.attrName, this.color);
    console.log("color en color button"+this.color);
    console.log(this.attrName);
  }

}
