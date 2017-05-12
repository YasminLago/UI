import { Component, Input } from '@angular/core';

import { PreviewService } from "../../services/PreviewService";


@Component({
  selector: 'my-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  inputs: ['previewOpacity : preview-opacity'],
  providers: [PreviewService]
})
export class SliderComponent {

  @Input() textLabelSlider:string;  


  constructor() { }
  
  
         
}
