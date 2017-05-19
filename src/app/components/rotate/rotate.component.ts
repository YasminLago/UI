import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.css',
              '../../styles/buttonStyle.css']
})
export class RotateComponent implements OnInit {

  @Input('attr-name') attrName:string;
  
  constructor() { }

  ngOnInit() {
  }

}
