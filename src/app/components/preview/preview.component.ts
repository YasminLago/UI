/**
 * Crea las formas a partir de los datos recibidos de PreviewService
 */

import { Component, ViewChild, Input, AfterViewInit } from '@angular/core';

import * as d3 from "d3";
import { D3Service } from 'd3-ng2-service';

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

  svgNS = "http://www.w3.org/2000/svg";
  shapeTag; // Nombre de la etiqueta con el que se creará la forma SVG
  svg:boolean = false; // Visibilidad del componente <svg>
  
  image:any = false;
  externalImage:any = '';

  checkBorder:any;
  
  shape:any = "circle"; // Opción seleccionada en el combobox
  size:any = 20; // Tamaño recogido del slider para el tamaño
  widthStroke:any = 0;
  colorFill:any = "#1f618d";
  colorStroke:string = "#00000";

  rotate:any;

  x:number;
  y:number;
  
  constructor(private previewService?:PreviewService) {
    previewService.anyProperty$.subscribe(
      previewAttr => {
      this.reDraw(previewAttr)  
    });
  }

  ngAfterViewInit() {
     this.createElement("circle");
  }

  /**
   * Crea un elemento para incluírlo dentro del SVG 
   * Recibe el nombre de la etiqueta con el que será 
   * creado el elemento
   */
  createElement(shapeTag) {
    this.shapeTag = document.createElementNS(this.svgNS, shapeTag);
  }

  /**
   * Recibe un boolean de create-button que 
   * hace visible el elemento <svg>
   */
  setSvg(svg:boolean) {
    this.svg = svg;
  }

  /**
   * Recibe la URL de la imagen externa y oculta 
   * la forma creada 
   */
  setDrawImage(previewAttr?:PreviewAttr) {
    this.externalImage = previewAttr.getImage(); //URL  
    this.setSvg(false);
  }
  
  /**
   * Elimina el elemento creado dentro de <svg>
   */
  clearShape(){
    document.getElementById('mySVG').removeChild(this.shapeTag);
  }

  calculateStarPoints(centerX, centerY, arms, outerRadius, innerRadius) {
   var results = "";
   var angle = Math.PI / arms;
   for (var i = 0; i < 2 * arms; i++) {
      // Use outer or inner radius depending on what iteration we are in.
      var r = (i & 1) == 0 ? outerRadius : innerRadius;
      var currX = centerX + Math.cos(i * angle) * r;
      var currY = centerY + Math.sin(i * angle) * r;
      // Our first time we simply append the coordinates, subsequet times
      // we append a ", " to distinguish each coordinate pair.
      if (i == 0) {
         results = currX + "," + currY;
      } else {
         results += ", " + currX + "," + currY;
      }
   }
   return results;
}

  drawPol(){
    this.createElement("polygon");
    this.shapeTag.setAttributeNS(null, "points", this.calculateStarPoints(150,150,5,80,40));
    document.getElementById("mySVG").appendChild(this.shapeTag);
  }

  /**
   * Crea un punto o un cuadrado dependiendo del 
   * valor de shape recibidos
   * Este método es llamado por primera vez en el
   * componente create-button
   */
  drawPointSquare(size?:string, color?:string, widthStroke?:string, shape?:string, shapeId?:string, previewAttr?:PreviewAttr) {

      this.shapeTag.setAttributeNS(null, "id", shapeId);

      if(shape == "circle") {
        this.shapeTag.setAttributeNS(null, "cx", '150');
        this.shapeTag.setAttributeNS(null, "cy", '150');
        this.shapeTag.setAttributeNS(null,"r", size);
      } else {
        this.shapeTag.setAttributeNS(null,"x",'125');
        this.shapeTag.setAttributeNS(null,"y",'125');
        this.shapeTag.setAttributeNS(null,"width", size);
        this.shapeTag.setAttributeNS(null,"height", size);
      }
      
      this.shapeTag.setAttributeNS(null, "fill", color);
      this.shapeTag.setAttributeNS(null, "stroke", widthStroke);
      document.getElementById("mySVG").appendChild(this.shapeTag);
  }

  drawPolygon(size?:string, color?:string, widthStroke?:string, shape?:string, shapeId?:string) {
    var pointList = [];
    this.shapeTag.setAttributeNS(null, "id", shapeId);
    var build = (arg) => {
      var res = [];
      var l = arg.length;
      for(var i=0; i<l; i++) {
        res.push(arg[i].join(','));
      }
      return res.join(' ');
    }
    // var attribute = (key, val) => {
    //   if(val === undefined) {
    //     return this.shapeTag.getAtt
    //   }
    // }
    
    if(shape == "triangle") {
      build(pointList);
    }
  }

 /**
  * Dibuja las distintas formas dependiendo de la opción
  * seleccionada en el combobox y de si existe imagen externa.
  * Recupera los valores de los distintos componentes para
  * la caracterización de las formas
  */ 
 reDraw(previewAttr?:PreviewAttr) {
   
    this.image = previewAttr.getExternalImage();//Boolean
    this.size = previewAttr.getSize();
  //  this.colorFill = previewAttr.getColor();
    this.shape = previewAttr.getSymbol();
    this.widthStroke = previewAttr.getWidth();

    if(this.image == true) {
      this.setDrawImage(previewAttr);

    } else {
       this.image = false;
       
       switch (this.shape) {
        
         case "circle": {
            this.clearShape();
            this.createElement("circle");
            this.drawPointSquare(this.size, "#1f618d", this.widthStroke, "circle", "myCircle");
           break;
         }

         case "square": {
           this.clearShape();
           this.createElement("rect");
           this.drawPointSquare(this.size, "#1f618d", this.widthStroke, "rect", "mySquare");
           break;
          }

          case "triangle": {
            this.clearShape();
            this.createElement("polygon");
            break;
          }

          case "star": {


            break;
          }

          case "cross": {

          }

          case "x": {

            break;
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


  // drawSquare() {
  //     this.circle.remove();
  //     this.square.setAttributeNS(null,"id","mysquare");
  //     this.square.setAttributeNS(null,"x",'100');
  //     this.square.setAttributeNS(null,"y",'100');
  //     this.square.setAttributeNS(null,"width",'50');
  //     this.square.setAttributeNS(null,"height",'50');
  //     this.square.setAttributeNS(null,"fill", "black");
  // }



/**************************END POINT**********************************/

}
