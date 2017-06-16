import { Component, Input } from '@angular/core';

import { PreviewComponent } from "../preview/preview.component";
import { PreviewService } from "../../services/PreviewService";


@Component({
  selector: 'my-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.css',
              '../../styles/buttonStyle.css'],
  inputs: [
    'previewComp : preview-comp', //preview#previewComponent --[preview-comp]=previewComponent
  ]
})
export class CreateButtonComponent {

  @Input('attr-name') attrName:string;
  previewComp: PreviewComponent;

  constructor(private previewService:PreviewService) { }

  public createShape() {
    this.previewComp.setSvg(true);
    //this.previewComp.drawPointSquare("20","#1f618d","0", "circle", "myCircle");
    this.previewComp.drawPol();
  }
}
