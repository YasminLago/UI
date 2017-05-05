import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input()
  textLabel:string = "Transparentar:";
                           


}
/*Array<string> = [
                            "Transparentar:",
                            "Tamaño:",
                            "Ancho:",
                            "Borde:"];*/