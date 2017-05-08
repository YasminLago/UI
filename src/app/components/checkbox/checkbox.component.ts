import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  @Input() textLabelCheckBox : string;

}
