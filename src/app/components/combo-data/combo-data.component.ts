import { Component, Input, OnInit } from '@angular/core';

import { Shape } from "../../combo";

import { PreviewService } from "../../services/PreviewService";
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Forms } from "../../forms.class";


@Component({
  selector: 'my-combo-data',
  templateUrl: './combo-data.component.html',
  styleUrls: ['./combo-data.component.css']

})
export class ComboDataComponent extends Forms implements OnInit {
  @Input('text-label-combo') textLabelCombo:string;  
  @Input('place-holder') placeHolder:string;
  @Input('attr-name') attrName:string;

  @Input('parent-form') parentForm: FormGroup;
  parentControl: FormControl;

  shapes: any = [ 
    {value: 'circle', viewValue: 'Círculo'},
    {value: 'square', viewValue: 'Cuadrado'},
    {value: 'triangle', viewValue: 'Triángulo'},
    {value: 'star', viewValue: 'Estrella'},
    {value: 'cross', viewValue: 'Cruz'},
    {value: 'x', viewValue: 'X'}
  ];
  selectedShape: string = this.shapes[0];

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

  selectedComboShape() {
    this.previewService.setValue(this.attrName,this.selectedShape);
  }
  

}
