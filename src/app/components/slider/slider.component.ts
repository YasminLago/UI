import { Component, Input } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";
import { Subscription } from 'rxjs/Subscription';

import { Attribute } from "../../attr";

import { GeneralComponent } from "../general/general.component";


@Component({
  selector: 'my-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
  // ,
  // providers: [PreviewService]
})

export class SliderComponent {

  @Input('text-label-slider') textLabelSlider:string;
  //@Input() attrNumber:number;
  @Input('attr-name') attrName:string;
  //attributes = new Attribute();
  @Input('value') sliderValue;
  //@Input ('active') active:boolean;


  general: GeneralComponent;

  constructor(private previewService:PreviewService) {}

  setSliderValue(event: any) {
    //this.attributes.setAttrs(this.attrName)
    this.previewService.setValue(this.attrName, this.sliderValue);
    console.log("text attr: " + this.attrName);
  }

  active(active:boolean) {
    this.general.setOpacity(active);
  }
}
