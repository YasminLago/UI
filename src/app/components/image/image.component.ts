import { Component, Input } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";
import { PreviewComponent } from "../preview/preview.component";

import { SliderComponent } from "../slider/slider.component";


@Component({
  selector: 'my-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  inputs: [ 'activeOpacity : active-opacity' ]
})
export class ImageComponent {

  @Input('attr-name') attrName:string;
  @Input() externalImage:string;

  activeOpacity:SliderComponent;

  constructor(private previewService:PreviewService) { }

  public createImage() {
     this.previewService.setValue(this.attrName,this.externalImage);
     this.previewService.setExternalImage(true);
  }

  public dropImage() {
    this.externalImage = "";
    this.previewService.setValue(this.attrName,this.externalImage);
    this.previewService.setExternalImage(false);
  }

  public activeOpac() {
    if (this.externalImage != "") {
      this.activeOpacity.active(false);
    } else {
      this.activeOpacity.active(true);
    }
  }

}
