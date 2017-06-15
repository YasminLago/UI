/**
 * Crea las formas a partir de los datos recibidos de PreviewService
 */

import { Component, ViewChild, Input, AfterViewInit } from '@angular/core';

import { CreateButtonComponent } from "../create-button/create-button.component";
import { PreviewService } from "../../services/PreviewService";
import { PreviewAttr } from "../../services/PreviewAttr";

@Component({
  selector: 'my-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  inputs : [
  ]
})

export class PreviewComponent implements AfterViewInit {

  @ViewChild("myCanvas") mycanvas;

  ctx:CanvasRenderingContext2D;
  canvas:boolean = false;
  
  image:any = false;
  externalImage:any = '';

  checkBorder:any;
  
  shape:any;
  sizePoint:any = 100;
  widthStroke:any = 0;
  colorFill:any = "#1f618d";
  colorStroke:string = "#00000";

  rotate:any;

  x:number;
  y:number;

  constructor(private previewService?:PreviewService) {
    previewService.anyProperty$.subscribe(
      previewAttr => {
      this.reDrawPoint(previewAttr)  
    });
  }

@ViewChild("mySvg") mysvg;
svgNS = "http://www.w3.org/2000/svg";
circle;
  ngAfterViewInit() {
     this.circle = document.createElementNS(this.svgNS, "circle");
    // let canvas = this.mycanvas.nativeElement;
    // this.ctx = canvas.getContext("2d");
    // this.ctx.canvas.width = 300;
    // this.ctx.canvas.height = 300;
    // this.x = this.ctx.canvas.width/2;    // = window.innerWidth;
    // this.y = this.ctx.canvas.height/2;// = window.innerHeight;
  }

  setCanvas(canvas:boolean) {
    this.canvas = canvas;
    this.drawPoint();
  }

  setDrawImage(previewAttr?:PreviewAttr) {
    this.externalImage = previewAttr.getImage(); //URL  
    this.clearShape();
    this.canvas = false;
  }

  clearShape(){
    this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
    this.ctx.restore();
  }
 reDrawPoint(previewAttr?:PreviewAttr) {
   
    this.image = previewAttr.getExternalImage();//Boolean
    
    this.sizePoint = previewAttr.getSize();
  //  this.colorFill = previewAttr.getColor();
    this.shape = previewAttr.getSymbol();
    this.widthStroke = previewAttr.getWidth();

    if(this.image == true) {
      this.canvas = false;
      this.setDrawImage(previewAttr);
      this.clearShape();
    
    } else {
        this.image = false;
//        switch (this.shape) {
//          case "circle": {
          this.circle.setAttributeNS(null,"id","mycircle");
          this.circle.setAttributeNS(null,"cx",'140');
          this.circle.setAttributeNS(null,"cy",'140');
          this.circle.setAttributeNS(null,"r", this.sizePoint);
          this.circle.setAttributeNS(null,"fill", this.colorFill);
          this.circle.setAttributeNS(null,"stroke", this.widthStroke);
          document.getElementById("mySVG").appendChild(this.circle);
//            break;
//          }
      //  }
      }
 }



// @ViewChild("mySvg") mysvg;
// svgNS = "http://www.w3.org/2000/svg";


//  this.circle = document.createElementNS(this.svgNS, "circle");
//  this.square = document.createElementNS(this.svgNS, "rect");


// DrawPoint

// this.circle.setAttributeNS(null,"id","mycircle");
//   this.circle.setAttributeNS(null,"cx",'140');
//   this.circle.setAttributeNS(null,"cy",'140');
//   this.circle.setAttributeNS(null,"r", this.sizePoint);
//   this.circle.setAttributeNS(null,"fill", this.colorFill);
//   this.circle.setAttributeNS(null,"stroke", this.widthStroke);
//   document.getElementById("mySVG").appendChild(this.circle);




//   DrawSquare


//   this.circle.remove();
//   this.square.setAttributeNS(null,"id","mysquare");
//   this.square.setAttributeNS(null,"x",'100');
//   this.square.setAttributeNS(null,"y",'100');
//   this.square.setAttributeNS(null,"width",'50');
//   this.square.setAttributeNS(null,"height",'50');
//   this.square.setAttributeNS(null,"fill", "black");





  /**************************POINT*****************************/
  drawPoint(previewAttr?:PreviewAttr) {


this.circle.setAttributeNS(null,"id","mycircle");
  this.circle.setAttributeNS(null,"cx",'140');
  this.circle.setAttributeNS(null,"cy",'140');
  this.circle.setAttributeNS(null,"r", this.sizePoint);
  this.circle.setAttributeNS(null,"fill", this.colorFill);
  this.circle.setAttributeNS(null,"stroke", this.widthStroke);
  document.getElementById("mySVG").appendChild(this.circle);

    // //  this.checkBorder = previewAttr.getCheckWidth();
    //   this.ctx.beginPath();
    //   this.ctx.arc(this.x, this.y, 60, 0, 2*Math.PI, true);
    //   console.log('Valor de size en Draw ' + this.sizePoint);
    //   this.ctx.fillStyle = this.colorFill;
    //   this.ctx.fill();
    // //  if (this.checkBorder == true) {
    //     this.ctx.lineWidth = this.widthStroke;
    //     this.ctx.strokeStyle = this.colorStroke;
    //     this.ctx.stroke();
    //  // }
  }



  // reDrawPoint(previewAttr?:PreviewAttr) {
  //   this.clearShape();
  //   this.image = previewAttr.getExternalImage();//Boolean
    
  //   this.sizePoint = previewAttr.getSize();
  //   this.colorFill = previewAttr.getColor();
  //   this.shape = previewAttr.getSymbol();
  //   this.widthStroke = previewAttr.getWidth();

  //   if(this.image == true) {
  //     this.canvas = false;
  //     this.setDrawImage(previewAttr);
  //     this.clearShape();
    
  //   } else {
  //       this.image = false;
  //       switch (this.shape) {
  //         case 'circle': {
  //           this.ctx.beginPath();
  //           this.ctx.arc(this.x, this.y, this.sizePoint, 0, 2*Math.PI, true);

  //           this.ctx.fillStyle = this.colorFill;
  //           this.ctx.fill();
  //           this.ctx.lineWidth = this.widthStroke;
  //           this.ctx.strokeStyle = this.colorStroke;
  //           this.ctx.stroke();
  //           this.clearShape();
  //           break;
  //         }
  //         case 'square': {
  //           this.ctx.beginPath();
  //           this.ctx.fillRect(this.x,this.y,this.sizePoint,this.sizePoint);
  //           this.ctx.fillStyle = this.colorFill;
  //           this.ctx.fill();
  //           this.ctx.lineWidth = this.widthStroke;
  //           this.ctx.strokeStyle = this.colorStroke;
  //           this.ctx.stroke();
  //           break;
  //         }
  //         case 'triangle': {
  //           this.rotate = previewAttr.getRotate();
  //           let sWidth =  this.ctx.canvas.width;
  //           let sHeight = this.ctx.canvas.height;
  //           // the triangle
  //          /* this.ctx.beginPath();
  //           this.ctx.moveTo((sWidth/2)+50,sHeight/2);
  //           this.ctx.lineTo((sWidth/2),(sHeight/2)-90);
  //           this.ctx.lineTo((sWidth/2)-50,sHeight/2);
  //           this.ctx.closePath();*/

  //           this.ctx.beginPath();
  //           this.ctx.moveTo((sWidth/2)+50,200);
  //           this.ctx.lineTo((sWidth/2),(200)-90);
  //           this.ctx.lineTo((sWidth/2)-50,200);
  //           this.ctx.closePath();
  //           this.ctx.rotate(Math.PI/this.rotate);
  //        // this.ctx.translate(-this.ctx.canvas.width/2, -this.ctx.canvas.height/2);
          
  //           // the outline
  //           this.ctx.lineWidth = this.widthStroke;
  //           this.ctx.strokeStyle = this.colorFill;
  //           this.ctx.stroke();
            
  //           // the fill color
  //           this.ctx.fillStyle = this.colorFill;
  //           this.ctx.fill();
  //           break;
  //       }

  //         case 'star': {
  //           this.ctx.beginPath();
  //           this.ctx.translate(this.x, this.y);
  //           this.ctx.moveTo(0,0-50);
  //           for (var i = 0; i < 5; i++) {
  //               this.ctx.rotate(Math.PI / 5);
  //               this.ctx.lineTo(0, 0 - (50*0.5));
  //               this.ctx.rotate(Math.PI / 5);
  //               this.ctx.lineTo(0, 0 - 50);
  //               this.clearShape();

  //           }
  //           this.ctx.lineWidth = this.widthStroke;
  //           this.ctx.fill();
  //           this.ctx.stroke();
  //           break;
  //         }
  //       }
  //     }
  // }
  

 /* reDrawPoint(previewAttr?:PreviewAttr) {
    this.image = previewAttr.getExternalImage();//Boolean
    this.clearShape();
    this.sizePoint = previewAttr.getSize();
    this.colorFill = previewAttr.getColor();
    this.shape = previewAttr.getSymbol();

    if(this.image != false) {
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
        /* case 'triangle': {

          let sWidth =  this.ctx.canvas.width;
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
          break;
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
          this.ctx.beginPath();
          this.ctx.moveTo(100, 200);
          this.ctx.lineTo(100,300);
    
          this.ctx.lineTo(100, 100);
          this.ctx.stroke();
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
  }*/



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
