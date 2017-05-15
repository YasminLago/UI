import { Component, ViewChild, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

import { ButtonComponent } from "../button/button.component";
import { PreviewService } from "../../services/PreviewService";

@Component({
  selector: 'my-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  inputs : [

  ],
  providers: [PreviewService]
})
export class PreviewComponent implements AfterViewInit, OnChanges{

  @ViewChild("myCanvas") mycanvas;

  ctx:CanvasRenderingContext2D;
  canvas:boolean = false;

  sizePoint:number = 60;
  widthStroke:number = 5;
  colorFill:string = "#1f618d";
  colorStroke:string = "#00000";

  constructor(private previewService:PreviewService) {
    previewService.anyProperty$$.subscribe(
      previewAttr => {
      this.drawPoint(previewAttr)

    });
  }

  ngOnChanges(changes: { [propName: string]: SimpleChanges }) {
    if (typeof (changes['staticData']) !== 'undefined') {

    }
    // this.drawPoint();
    // console.log(this.sizePoint);
  }

  setCanvas(canvas:boolean){
    this.canvas = canvas;
    this.drawPoint();
    console.log(this.sizePoint);
  }

  ngAfterViewInit() {
    let canvas = this.mycanvas.nativeElement;
    this.ctx = canvas.getContext("2d");
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }

  /**************************POINT*****************************/
  drawPoint(size?:any) {
    this.ctx.beginPath();
    this.ctx.arc(150, 140, this.sizePoint, 0, 2*Math.PI, true);
    
    this.ctx.fillStyle = this.colorFill;
    this.ctx.fill();
    this.ctx.lineWidth = this.widthStroke;
    this.ctx.strokeStyle = this.colorStroke;
    this.ctx.stroke();
  }

  setSizePoint() {
   
  }

  opacityPoint(){
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  }

  fillColorPoint() {
    this.ctx.fillStyle = this.colorFill;
    this.ctx.fill();
  }

  strokeColorPoint() {
    this.ctx.strokeStyle = this.colorStroke;
    this.ctx.stroke();
  }

  widthStrokePoint() {
    this.ctx.lineWidth = this.widthStroke;
  }

  opacityStrokePoint(){
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
  }
/**************************END POINT**********************************/

}
