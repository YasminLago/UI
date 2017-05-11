import { Component, Input } from '@angular/core';

import { Shape } from "../../combo";

@Component({
  selector: 'my-combo-data',
  templateUrl: './combo-data.component.html',
  styleUrls: ['./combo-data.component.css']

})
export class ComboDataComponent {
  @Input() textLabelCombo:string;  
  @Input() placeHolder:string;

  selectedShape: string;
  shapes: Shape[] = [];
  

}
