import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css',
              '../../styles/buttonStyle.css']
})
export class ImageComponent implements OnInit {

  @Input() attrName:string;

  constructor() { }

  ngOnInit() {
  }

}
