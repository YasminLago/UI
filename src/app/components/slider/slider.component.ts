import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() textLabelSlider:string;               
}
