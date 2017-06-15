/**
 * Crea las formas a partir de los datos recibidos de PreviewService
 */

import { Component, ViewChild, Input, AfterViewInit } from '@angular/core';

import * as d3 from "d3";

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
  size:any;
  widthStroke:any = 0;
  colorFill:any = "#1f618d";
  colorStroke:string = "#00000";

  rotate:any;

  x:number;
  y:number;

  d3 = require("d3");

  constructor(private previewService?:PreviewService) {
    previewService.anyProperty$.subscribe(
      previewAttr => {
      this.reDraw(previewAttr)  
    });
  }

  @ViewChild("mySvg") mysvg;
  svgNS = "http://www.w3.org/2000/svg";
  shapeTag;


  ngAfterViewInit() {
     this.shapeTag = this.createElement("circle");
    // let canvas = this.mycanvas.nativeElement;
    // this.ctx = canvas.getContext("2d");
    // this.ctx.canvas.width = 300;
    // this.ctx.canvas.height = 300;
    // this.x = this.ctx.canvas.width/2;    // = window.innerWidth;
    // this.y = this.ctx.canvas.height/2;// = window.innerHeight;
  }

  createElement(shapeTag) {
    return document.createElementNS(this.svgNS, shapeTag);
  }

  drawPointSquare(size?:string, color?:string, widthStroke?:string, shape?:string, shapeId?:string, previewAttr?:PreviewAttr) {
      console.log("hhshhss",shape);
      this.shapeTag.setAttributeNS(null, "id", shapeId);
      
      if(shape == "circle") {
        this.shapeTag.setAttributeNS(null, "cx", '150');
        this.shapeTag.setAttributeNS(null, "cy", '150');
        this.shapeTag.setAttributeNS(null,"r", size);
      } else {
        this.shapeTag.setAttributeNS(null,"x",'135');
        this.shapeTag.setAttributeNS(null,"y",'135');
        this.shapeTag.setAttributeNS(null,"width", size);
        this.shapeTag.setAttributeNS(null,"height", size);
      }
      
      this.shapeTag.setAttributeNS(null, "fill", color);
      this.shapeTag.setAttributeNS(null, "stroke", widthStroke);
      document.getElementById("mySVG").appendChild(this.shapeTag);
  }




// DrawPoint

// this.circle.setAttributeNS(null,"id","mycircle");
//   this.circle.setAttributeNS(null,"cx",'140');
//   this.circle.setAttributeNS(null,"cy",'140');
//   this.circle.setAttributeNS(null,"r", this.sizePoint);
//   this.circle.setAttributeNS(null,"fill", this.colorFill);
//   this.circle.setAttributeNS(null,"stroke", this.widthStroke);
//   document.getElementById("mySVG").appendChild(this.circle);


  // drawSquare() {
  //     this.circle.remove();
  //     this.square.setAttributeNS(null,"id","mysquare");
  //     this.square.setAttributeNS(null,"x",'100');
  //     this.square.setAttributeNS(null,"y",'100');
  //     this.square.setAttributeNS(null,"width",'50');
  //     this.square.setAttributeNS(null,"height",'50');
  //     this.square.setAttributeNS(null,"fill", "black");
  // }



  setCanvas(canvas:boolean) {
    this.canvas = canvas;
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


  
 reDraw(previewAttr?:PreviewAttr) {
   
    this.image = previewAttr.getExternalImage();//Boolean
    
    this.size = previewAttr.getSize();
    console.log("Size ",this.size);
  //  this.colorFill = previewAttr.getColor();
    this.shape = previewAttr.getSymbol();
    console.log(this.shape);
    this.widthStroke = previewAttr.getWidth();

    if(this.image == true) {
      this.canvas = false;
      this.setDrawImage(previewAttr);
 
    
    } else {
        this.image = false;
       
       switch (this.shape) {
         case "circle": {
           this.createElement("circle");
            this.drawPointSquare(this.size, "#1f618d", this.widthStroke, "circle", "myCircle");
           break;
         }
         case 'square': {
           this.createElement("rect");
           this.d3.select("circle").remove();
            this.drawPointSquare(this.size, "#1f618d", this.widthStroke, "rect", "mySquare");
          }
        //   case 'triangle': {
        //     this.rotate = previewAttr.getRotate();
        //     let sWidth =  this.ctx.canvas.width;
        //     let sHeight = this.ctx.canvas.height;
        //     // the triangle
        //    /* this.ctx.beginPath();
        //     this.ctx.moveTo((sWidth/2)+50,sHeight/2);
        //     this.ctx.lineTo((sWidth/2),(sHeight/2)-90);
        //     this.ctx.lineTo((sWidth/2)-50,sHeight/2);
        //     this.ctx.closePath();*/

        //     this.ctx.beginPath();
        //     this.ctx.moveTo((sWidth/2)+50,200);
        //     this.ctx.lineTo((sWidth/2),(200)-90);
        //     this.ctx.lineTo((sWidth/2)-50,200);
        //     this.ctx.closePath();
        //     this.ctx.rotate(Math.PI/this.rotate);
        //  // this.ctx.translate(-this.ctx.canvas.width/2, -this.ctx.canvas.height/2);
          
        //     // the outline
        //     this.ctx.lineWidth = this.widthStroke;
        //     this.ctx.strokeStyle = this.colorFill;
        //     this.ctx.stroke();
            
        //     // the fill color
        //     this.ctx.fillStyle = this.colorFill;
        //     this.ctx.fill();
        //     break;
        // }

        //   case 'star': {
        //     this.ctx.beginPath();
        //     this.ctx.translate(this.x, this.y);
        //     this.ctx.moveTo(0,0-50);
        //     for (var i = 0; i < 5; i++) {
        //         this.ctx.rotate(Math.PI / 5);
        //         this.ctx.lineTo(0, 0 - (50*0.5));
        //         this.ctx.rotate(Math.PI / 5);
        //         this.ctx.lineTo(0, 0 - 50);
        //         this.clearShape();

        //     }
        //     this.ctx.lineWidth = this.widthStroke;
        //     this.ctx.fill();
        //     this.ctx.stroke();
        //     break;
        //   }
         }
      }
 }




// @ViewChild("mySvg") mysvg;
// svgNS = "http://www.w3.org/2000/svg";


//  this.circle = document.createElementNS(this.svgNS, "circle");
//  this.square = document.createElementNS(this.svgNS, "rect");








//   DrawSquare


//   this.circle.remove();
//   this.square.setAttributeNS(null,"id","mysquare");
//   this.square.setAttributeNS(null,"x",'100');
//   this.square.setAttributeNS(null,"y",'100');
//   this.square.setAttributeNS(null,"width",'50');
//   this.square.setAttributeNS(null,"height",'50');
//   this.square.setAttributeNS(null,"fill", "black");





  /**************************POINT*****************************/



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

}
