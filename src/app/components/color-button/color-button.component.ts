import { Component, Input } from '@angular/core';
//import {ColorPickerService} from 'angular2-color-picker';

import { PreviewService } from "../../services/PreviewService";

@Component({
  selector: 'my-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.css',
              '../../styles/buttonStyle.css'],
})
export class ColorButtonComponent {

  @Input('attr-name') attrName:string;
  private color: string = "#1f618d";

  constructor(private previewService:PreviewService) { }

  colorPicker() {
    this.previewService.setValue(this.attrName, this.color);
    console.log("color en color button"+this.color);
    console.log(this.attrName);
  }

}
