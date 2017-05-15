import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { PreviewComponent } from "../preview/preview.component";

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css',
              '../../styles/buttonStyle.css'],
  inputs: [
    'previewComp : preview-comp', //preview#previewComponent --[preview-comp]=previewComponent
  ]
})
export class ButtonComponent {

  @Input() attrName:string;
  @Input() textButton : string;
  previewComp: PreviewComponent;

  constructor() { }

  public createShape() {
    this.previewComp.setCanvas(true);
  }

}
