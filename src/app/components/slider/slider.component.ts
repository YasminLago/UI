import { Component, Input } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'my-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})

export class SliderComponent {

  @Input() textLabelSlider:string;
  @Input() attrName:string;
  sliderValue:number;
  subscription: Subscription;

  constructor(private previewService:PreviewService) {
    this.subscription = previewService.size$.subscribe(
      size => {
      size = this.sliderValue;
    });
  }
  
   setSliderValue() {
    this.previewService.setValue(this.attrName, this.sliderValue);
    
  }
         
}
