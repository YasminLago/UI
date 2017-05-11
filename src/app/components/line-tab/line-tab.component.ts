import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-line-tab',
  templateUrl: './line-tab.component.html',
  styleUrls: ['./line-tab.component.css']
})
export class LineTabComponent {

  @Input() checkText:string;

}
