import { Component, ViewChild, ElementRef,Input } from '@angular/core';

import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'my-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {

 canvas:boolean = false;
 canvas2:boolean = false;

 // @ViewChild("myCanvas") myCanvas: ElementRef;
  constructor(){}
  
  setCanvas(canvas:boolean){
    this.canvas = canvas;
    console.log(canvas);
  }
}
