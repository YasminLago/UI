import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { PreviewComponent } from "../preview/preview.component";

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  inputs: [
    'previewComp : preview-comp',

  ]
})
export class ButtonComponent {

  previewComp: PreviewComponent;

  constructor() { }

  public createShape() {
    this.previewComp.setCanvas(true);
  }

}
