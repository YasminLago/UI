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
  @Input('rotate-value') rotateValue: number = 0;
  
  constructor(private previewService:PreviewService) { }

  rotateLeftValue() {
    this.rotateValue--;
    this.previewService.setValue(this.attrName, this.rotateValue);
   // console.log("text attr: " + this.attrName);
   // console.log("RotateValue1: " + this.rotateValue);
  }

  rotateRightValue() {
    this.rotateValue++;
    this.previewService.setValue(this.attrName, this.rotateValue);
   // console.log("text attr: " + this.attrName);
    //console.log("RotateValue2: " + this.rotateValue);
  }

  rotateInputValue() {
      this.previewService.setValue(this.attrName, this.rotateValue);
     // console.log("text attr: " + this.attrName);
     // console.log("Rotatevalue3: " + this.rotateValue);
  }
}
