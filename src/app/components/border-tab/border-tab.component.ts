import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-border-tab',
  templateUrl: './border-tab.component.html',
  styleUrls: ['./border-tab.component.css']
})
export class BorderTabComponent {

  @Input() textTab:string;

  constructor() { }


}
