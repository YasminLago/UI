import { Component, Input } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'my-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  inputs: ['previewOpacity : preview-opacity']
  
})
export class SliderComponent {

  @Input() textLabelSlider:string;  
  @Input() sliderValue:number;
  subscription: Subscription;

  constructor(private previewService:PreviewService) {
    this.subscription = previewService.sizeSlider$.subscribe();
  }
  
  /*
   getSizeSlider() {
    this.sizeSlider.setPointSize(this.sliderValue);
  }*/
         
}
