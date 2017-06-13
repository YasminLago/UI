import { Component, 
         Input, 
         AfterViewInit, 
         OnInit, 
         Output, 
         EventEmitter } from '@angular/core';
import { FormControl, 
         FormGroup, 
         Validators, 
         FormBuilder } from '@angular/forms';
         
import { Forms } from "../../forms.class";

@Component({
  selector: 'border-style',
  templateUrl: './border-style.component.html',
  styleUrls: ['./border-style.component.css',
    '../../styles/buttonStyle.css']
})

export class BorderStyleComponent extends Forms {

  @Input('text-label') textLbl: string; 

  //Cambia la visibilidad de los componentes.
  //Envía el valor al atributo [hidden] (border-style.component.html) desde los componentes point-tab, line-tab y polygon-tab
  //Por defecto true (no visible)
  @Input('show-lbl') lbl: boolean = true;
  @Input('show-check') check: boolean = true;
  @Input('show-combo') combo: boolean = true;
  @Input('show-width-slider') widthSlider: boolean = true;
  @Input('show-opacity-slider') opacitySlider: boolean = true;
  @Input('show-separation-slider') separationSlider: boolean = true;
  @Input('show-position-slider') positionSlider: boolean = true;
  @Input('show-distance-slider') distanceSlider: boolean = true;
  @Input('show-size-slider') sizeSlider: boolean = true;
  @Input('show-color-button') colorButton: boolean = false;
  @Input('show-image') image: boolean = true;
  @Input('show-rotate') rotate: boolean = true;

  parentControl: FormControl;
  borderForm: FormGroup;

  @Input('attr-name') attrName: string;
  @Output('onFormGroupChange') onFormGroupChange: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() {
    super();
    this.borderForm = new FormGroup({});
    this.borderForm.valueChanges.subscribe((value) => {
      //Envía el nombre del atributo que recibe en point-tab y el FormGroup
      this.onFormGroupChange.emit({ id: this.attrName, values: this.borderForm.value });
    });
  }

  visible(): boolean {
    return false;
  }
  hide(): boolean {
    return true;
  }
}
