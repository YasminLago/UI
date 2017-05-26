import { Component, Input } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";

@Component({
  selector: 'my-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.css',
              '../../styles/buttonStyle.css']
})
export class RotateComponent {

  @Input('attr-name') attrName:string;
  @Input('rotate-value')rotateValue:number;
  
  constructor(private previewService:PreviewService) { }

  setRotateValue() {
    this.previewService.setValue(this.attrName, this.rotateValue);
    console.log("text attr: " + this.attrName);
  }

}
