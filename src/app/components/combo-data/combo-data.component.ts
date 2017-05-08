import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-combo-data',
  templateUrl: './combo-data.component.html',
  styleUrls: ['./combo-data.component.css']
})
export class ComboDataComponent {
  @Input() textLabelCombo:string;  

  selectedShape: string;

  shapes = [
    {value: 'circle', viewValue: 'Círculo'},
    {value: 'square', viewValue: 'Cuadradro'},
    {value: 'triangle', viewValue: 'Triángulo'},
    {value: 'star', viewValue: 'Estrella'},
    {value: 'cross', viewValue: 'Cruz'},
    {value: 'x', viewValue: 'X'}
  ];


}
