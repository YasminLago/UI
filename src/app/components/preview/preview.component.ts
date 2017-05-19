import { Component, ViewChild, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

import { ButtonComponent } from "../button/button.component";
import { PreviewService } from "../../services/PreviewService";
import { PreviewAttr } from "../../services/PreviewAttr";

@Component({
  selector: 'my-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  inputs : [

  ]
  // ,
  // providers: [PreviewService]
})
export class PreviewComponent implements AfterViewInit{

  @ViewChild("myCanvas") mycanvas;


  ctx:CanvasRenderingContext2D;
  canvas:boolean = false;

  sizePoint:any;
  widthStroke:any = 5;
  colorFill:any = "#1f618d";
  colorStroke:string = "#00000";

  constructor(private previewService:PreviewService) {
    previewService.anyProperty$.subscribe(
      previewAttr => {
      this.reDrawPoint(previewAttr)  
    });
  }

  ngAfterViewInit() {
    let canvas = this.mycanvas.nativeElement;
    this.ctx = canvas.getContext("2d");
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }

  setCanvas(canvas:boolean) {
    this.canvas = canvas;
    this.drawPoint();
  }

  clearShape(){
    this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
  }

  /**************************POINT*****************************/
 drawPoint() {
    this.ctx.beginPath();
    this.ctx.arc(150, 140, 60, 0, 2*Math.PI, true);
    console.log('Valor de size en Draw ' + this.sizePoint);
    this.ctx.fillStyle = this.colorFill;
    this.ctx.fill();
    this.ctx.lineWidth = this.widthStroke;
    this.ctx.strokeStyle = this.colorStroke;
    this.ctx.stroke();
  }

  reDrawPoint(previewAttr?:PreviewAttr) {
    this.clearShape();
    this.sizePoint = previewAttr.getSize();
    this.colorFill = previewAttr.getOpacity();
    this.ctx.beginPath();
    this.ctx.arc(150, 140, this.sizePoint, 0, 2*Math.PI, true);

    console.log('Valor de size en ReDraw ' +  previewAttr.getSize());

    this.ctx.fillStyle = this.colorFill;
    this.ctx.fill();
    this.ctx.lineWidth = this.widthStroke;
    this.ctx.strokeStyle = this.colorStroke;
    this.ctx.stroke();
  }

  opacityPoint() {
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

  opacityStrokePoint() {
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
  }
/**************************END POINT**********************************/

}
