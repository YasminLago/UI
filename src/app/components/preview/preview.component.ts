import { Component, ViewChild, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

import { CreateButtonComponent } from "../create-button/create-button.component";
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

  canvas:boolean = false;
  image:any = false;
  externalImage:any = '';

  ctx:CanvasRenderingContext2D;
  shape:any;
  sizePoint:any = 30;
  widthStroke:any = 5;
  colorFill:any = "#1f618d";
  colorStroke:string = "#00000";

  constructor(private previewService?:PreviewService) {
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

  setDrawImage(previewAttr?:PreviewAttr) {
    this.externalImage = previewAttr.getImage();  //URL  
  }

  clearShape(){
    this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
    this.ctx.restore();
  }

  /**************************POINT*****************************/
  drawPoint(previewAttr?:PreviewAttr) {
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
    this.image = previewAttr.getExternalImage();//Boolean
    this.clearShape();
    this.sizePoint = previewAttr.getSize();
    this.colorFill = previewAttr.getColor();
    this.shape = previewAttr.getSymbol();

    if(this.image != false){
      this.setDrawImage(previewAttr);

    } else {

      switch (this.shape) {
        case 'circle': {
          this.ctx.beginPath();
          this.ctx.arc(150, 140, this.sizePoint, 0, 2*Math.PI, true);

          this.ctx.fillStyle = this.colorFill;
          this.ctx.fill();
          this.ctx.lineWidth = this.widthStroke;
          this.ctx.strokeStyle = this.colorStroke;
          this.ctx.stroke();
          break;
        }
        case 'square': {
          this.ctx.beginPath();
          this.ctx.fillRect(100,100,this.sizePoint,this.sizePoint);
          this.ctx.fillStyle = this.colorFill;
          this.ctx.fill();
          this.ctx.lineWidth = this.widthStroke;
          this.ctx.strokeStyle = this.colorStroke;
          this.ctx.stroke();
          break;
        }
        case 'triangle': {

      /*   let sWidth =  this.ctx.canvas.width;
          let sHeight = this.ctx.canvas.height;
          // the triangle
          this.ctx.beginPath();
          this.ctx.moveTo((sWidth/2)+50,sHeight/2);
          this.ctx.lineTo((sWidth/2),(sHeight/2)-50);
          this.ctx.lineTo((sWidth/2)-50,sHeight/2);
          //this.ctx.closePath();
          
          // the outline
          this.ctx.lineWidth = 10;
          this.ctx.strokeStyle = this.colorFill;
          this.ctx.stroke();
          
          // the fill color
          this.ctx.fillStyle = this.colorFill;
          this.ctx.fill();
          break;*/
        }
        case 'star': {
          this.ctx.beginPath();
          this.ctx.translate(150, 140);
          this.ctx.moveTo(0,0-90);
          for (var i = 0; i < 5; i++) {
              this.ctx.rotate(Math.PI / 5);
              this.ctx.lineTo(0, 0 - (90*0.5));
              this.ctx.rotate(Math.PI / 5);
              this.ctx.lineTo(0, 0 - 90);
          }
          this.ctx.fill();
          this.ctx.stroke();
          break;
        }
        case 'cross': {
          /*this.ctx.beginPath();
          this.ctx.moveTo(100, 200);
          this.ctx.lineTo(100,300);
    
          this.ctx.lineTo(100, 100);
          this.ctx.stroke();*/
        }
        case 'x': {
          this.ctx.beginPath();
          this.ctx.moveTo(100 - 20, 100 - 20);
          this.ctx.lineTo(100 + 20, 100 + 20);

          this.ctx.moveTo(100 + 20, 100 - 20);
          this.ctx.lineTo(100 - 20, 100 + 20);
          this.ctx.stroke();
          break;
        }
      }
    }
  }
/**************************END POINT**********************************/
drawSquare() {
    this.ctx.beginPath();
    this.ctx.fillRect(150,20,50,50);
  //  console.log('Valor de size en Draw ' + this.sizePoint);
    this.ctx.fillStyle = this.colorFill;
    this.ctx.fill();
    this.ctx.lineWidth = this.widthStroke;
    this.ctx.strokeStyle = this.colorStroke;
    this.ctx.stroke();
  }
}
