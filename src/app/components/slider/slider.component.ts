import { Component, Input } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'my-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
  // ,
  // providers: [PreviewService]
})

export class SliderComponent {

  @Input() attrName:string;
  sliderValue = 30;
  subscription: Subscription;
  @Input() textLabelSlider:string;

  constructor(private previewService:PreviewService) {}
  
  setSliderValue(event: any) {
    this.previewService.setValue(this.attrName, this.sliderValue);
    console.log(this.attrName);
  }

  
  
}
