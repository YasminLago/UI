import { Component, Input } from '@angular/core';

import { Shape } from "../../combo";

@Component({
  selector: 'my-combo-data',
  templateUrl: './combo-data.component.html',
  styleUrls: ['./combo-data.component.css']

})
export class ComboDataComponent {
  @Input('text-label-combo') textLabelCombo:string;  
  @Input('place-holder') placeHolder:string;
  @Input('attr-name') attrName:string;

  selectedShape: string;
  shapes: any = [ 
    {value: 'circle', viewValue: 'Círculo'},
    {value: 'square', viewValue: 'Cuadradro'},
    {value: 'triangle', viewValue: 'Triángulo'},
    {value: 'star', viewValue: 'Estrella'},
    {value: 'cross', viewValue: 'Cruz'},
    {value: 'x', viewValue: 'X'}
  ];
  

}
