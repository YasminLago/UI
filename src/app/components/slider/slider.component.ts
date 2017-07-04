import { Component, Input, OnInit } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";
import { Subscription } from 'rxjs/Subscription';

import { Attribute } from "../../attr";

import { GeneralComponent } from "../general/general.component";
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

import { Forms } from "../../forms.class";


@Component({
  selector: 'my-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
  // ,
  // providers: [PreviewService]
})

export class SliderComponent extends Forms implements OnInit {

  @Input('text-label-slider') textLabelSlider:string;
  //@Input() attrNumber:number;
  @Input('attr-name') attrName:string;
  //attributes = new Attribute();
  @Input('value') sliderValue;
  
  @Input('min-value') minValue:number; //Valor mínimo del slider
  @Input('max-value') maxValue:number; //Valor máximo del slider
  @Input('parent-form') parentForm: FormGroup; //FormGroup al que pertenece. Recibe este valor en (border-style y general)
  parentControl: FormControl;

  constructor(private previewService:PreviewService) {
    super();
  }

  /**
   * Los datos se cargan al iniciarse el componente
   * Envía a la clase Forms el FormGroup al que pertenece,
   * su nombre de atributo, crea un FormControl para incluírlo 
   * en el FormGroup y lo envía a Forms
   */
  ngOnInit() {
    this.setForm(this.parentForm);
    this.setAttrName(this.attrName);

    this.parentControl = new FormControl();
    if (this.parentForm) {
      this.parentForm.addControl(this.attrName, this.parentControl);
    }
    this.setControl(this.parentControl);
  }

  /**
   * Envía el valor del slider y el nombre del atributo a PreviewService 
   */
  setSliderValue(event: any) {
    //this.attributes.setAttrs(this.attrName)
    this.previewService.setValue(this.attrName, this.sliderValue);
  }
}
