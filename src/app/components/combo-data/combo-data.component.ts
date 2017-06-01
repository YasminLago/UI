import { Component, Input, OnInit } from '@angular/core';

import { Shape } from "../../combo";

import { PreviewService } from "../../services/PreviewService";
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'my-combo-data',
  templateUrl: './combo-data.component.html',
  styleUrls: ['./combo-data.component.css']

})
export class ComboDataComponent implements OnInit {
  @Input('text-label-combo') textLabelCombo:string;  
  @Input('place-holder') placeHolder:string;
  @Input('attr-name') attrName:string;

  @Input('form') form: FormGroup;
  control: FormControl;

  shapes: any = [ 
    {value: 'circle', viewValue: 'Círculo'},
    {value: 'square', viewValue: 'Cuadradro'},
    {value: 'triangle', viewValue: 'Triángulo'},
    {value: 'star', viewValue: 'Estrella'},
    {value: 'cross', viewValue: 'Cruz'},
    {value: 'x', viewValue: 'X'}
  ];
  selectedShape: string ;

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

  selectedComboShape() {
    this.previewService.setValue(this.attrName,this.selectedShape);
    console.log(this.selectedShape);
    console.log(this.attrName);
  }
  

}
