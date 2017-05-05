import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@ViewChild("myCanvas") myCanvas: ElementRef;

canvas:boolean = false;

  createShape() {
    this.canvas = true;
    /*var ctx:CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");
    ctx.fillStyle = 'blue';
    ctx.fillRect(10,10,150,150);*/
  }

}
