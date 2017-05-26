import { Component, Input } from '@angular/core';

import { Shape } from "../../combo";

import { PreviewService } from "../../services/PreviewService";

@Component({
  selector: 'my-combo-data',
  templateUrl: './combo-data.component.html',
  styleUrls: ['./combo-data.component.css']

})
export class ComboDataComponent {
  @Input('text-label-combo') textLabelCombo:string;  
  @Input('place-holder') placeHolder:string;
  @Input('attr-name') attrName:string;

  shapes: any = [ 
    {value: 'circle', viewValue: 'Círculo'},
    {value: 'square', viewValue: 'Cuadradro'},
    {value: 'triangle', viewValue: 'Triángulo'},
    {value: 'star', viewValue: 'Estrella'},
    {value: 'cross', viewValue: 'Cruz'},
    {value: 'x', viewValue: 'X'}
  ];
  selectedShape: string ;

  constructor(private previewService:PreviewService) { }

  selectedComboShape() {
    this.previewService.setValue(this.attrName,this.selectedShape);
    console.log(this.selectedShape);
    console.log(this.attrName);
  }
  

}
