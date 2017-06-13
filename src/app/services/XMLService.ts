import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, 
         FormGroup, 
         Validators, 
         FormBuilder, 
         FormArray } from '@angular/forms';

import { xmlbuilder } from "xmlbuilder";

@Injectable()
export class XMLService {

    utfVersion = { encoding: 'utf-8' };
    styleLayerDesc = "StyledLayerDescriptor";
    styleLayerAttr = {
                       'version' : '1.0.0',
                       'xsi:schemaLocation' : 'http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd',
                       'xmlns' : 'http://www.opengis.net/sld',
                       'xmlns:ogc' : 'http://www.opengis.net/ogc',
                       'xmlns:xlink' : 'http://www.w3.org/1999/xlink',
                       'xmlns:xsi' : 'http://www.w3.org/2001/XMLSchema-instance'
                     };


    namedLayer = "NamedLayer";
    name = "Name";
    description = "Description";
    namedStyle = "NamedStyle";
    userStyle = "UserStyle";
    
    userLayer = "UserLayer";
    inFeature = "InlineFeature";
    title = "Title";
    abstr = "Abstract";
    default = "IsDefault";

    featureType = "FeatureTypeStyle";
    featureTypeName = "FeatureTypeName";
    rule = "Rule";

    filter = "Filter";
    minScaleDenominator = "MinScaleDenominator";
    maxScaleDenominator = "MaxScaleDenominator";


    // PointSymbolizer
    pointSymbolizer = "PointSymbolizer";
        geometry = "Geometry";
        graphic = "Graphic";
            externalGraphic = "ExternalGraphic";
                onlineResource = "OnlineResource";
                format = "Format";

            mark = "Mark";
                wellKnownName = "WellKnownName";
                fill = "Fill";
                    cssParameter = "CssParameter";
                stroke = "Stroke";
            opacity = "Opacity";
            size = "Size";
            rotation = "Rotation";
                                            // "fill",
                                            // "fill-opacity"

            strokeAttr = {
                          color : "stroke",
                          width : "stroke-width"
                        };

                        // "stroke-opacity",
                        //   "stroke-linejoin",
                        //   "stroke-linecap",
                        //   "stroke-dasharray",
                        //   "stroke-dashoffset"
    //Point
    pointValue; 

    //General
    symbolValue;
    imageValue;
    sizeValue;
    
    //positionValue;
    checkWidth;

    widthValue;
    colorValue;

    valueGeneral;
    valueBorder;


    builder = require('xmlbuilder');
    xml = this.builder.create(this.styleLayerDesc, this.utfVersion)
                      .att(this.styleLayerAttr)
                      .ele(this.namedLayer)
                      .ele(this.userStyle)
                      .ele(this.featureType)
                      .ele(this.rule);

    pointTag = this.xml.ele(this.pointSymbolizer);

    symbolTag = this.xml.ele(this.graphic)
                        .ele(this.mark)
                        .ele(this.wellKnownName, this.symbolValue);

    imageTag =  this.xml.ele(this.graphic)
                        .ele(this.externalGraphic)
                        .ele(this.onlineResource)
                        .up()
                        .ele(this.format);

    sizeTag = this.xml.ele(this.size, this.sizeValue);

    strokeTag = this.xml.ele(this.stroke);
    //                     .ele(this.cssParameter, { name : this.strokeAttr[] });



    tags = {
            point : this.pointTag,
            symbol : this.symbolTag,
            external_image : this.imageTag
            };

    getXMLValues() {
        return console.log("GETDATOS XML: " );
    }



    setXMLValues(value:any) {
        console.log(value);
        this.valueGeneral = value.general;
        this.valueBorder = value.border;

       // console.log("General",value.general);
        if (this.valueGeneral != null) {
           Object.keys(this.valueGeneral).forEach((key) => {
                for (let attr in this.strokeAttr) {
                    if (key == attr) {
                        this.xml.ele(this.cssParameter, { name : this.strokeAttr[attr] }, this.widthValue);
                        console.log("key", key);
                        console.log("attr", attr);
                    }
                }
            }); 
        }


        this.pointValue = value.point != undefined ? value.point.point : null;
        
        this.symbolValue = this.valueGeneral != undefined ? this.valueGeneral.symbol : null;

        this.imageValue = this.valueGeneral != undefined ? this.valueGeneral.external_image : null;
        this.sizeValue = this.valueGeneral != undefined ? this.valueGeneral.size : null;

        this.checkWidth = this.valueBorder != undefined ? this.valueBorder.check_width : null;
        this.widthValue = this.valueBorder != undefined ? this.valueBorder.width : null;
    }


    append2xml(xml:any, attrname?:string, sameLevel?:boolean, value?:any) {
            
            // if(this.pointValue) {
            //     this.pointTags;
            //     console.log(this.xml.end({ pretty: true , allowEmpty: false})); 
            // }
            
            // if(sameLevel) {
            //    this.xml = xml.up().ele(attrname);
            // }
            // else {
            //    this.xml = xml.ele(attrname);
            // }

            // xml = xml.ele(attrname,{ key : value});
            // xml = xml.ele(attrname);
           // xml = xml.ele(attrname, value);       
    }


    createXMLPoint() {

        if(this.pointValue) {
            this.pointTag;
            console.log("pointValue", this.pointValue);
            console.log(this.xml.end({ pretty: true , allowEmpty: false})); 
        }

        //  this.xml = this.xml.ele(this.namedLayer);
        //     this.xml = this.xml.ele(this.userStyle);
        //         this.xml = this.xml.ele(this.featureType);
        //             this.xml = this.xml.ele(this.rule);
        //                 this.xml = this.xml.ele(this.pointSymbolizer);
       
        //                     this.xml = this.xml.ele(this.graphic);
        //                     this.xml = this.xml.ele(this.size, this.sizeValue);
        //                     this.xml = this.xml.up();
        //                     this.xml = this.xml.ele(this.opacity, 40);
        //                     this.xml = this.xml.up();
        //                     this.xml = this.xml.ele(this.rotation, 40);
                            
        //                     this.xml = this.xml.up().ele(this.mark);
         
        //  this.xml = this.xml.ele(this.wellKnownName, this.symbolValue);
         
        //  this.xml =  this.xml.up().ele('Stroke');
         
        //  this.xml = this.xml.ele(this.cssParameter, {name : 'stroke'});
        //  this.xml = this.xml.up();
        //  this.xml = this.xml.up().ele(this.fill);
        //  this.xml = this.xml.ele(this.cssParameter, {name : 'fill'}, '#F54223');
         
       // console.log(this.xml.end({ pretty: true , allowEmpty: false})); 
         
        //var builder = require('xmlbuilder');
        //var xml = builder.create('StyledLayerDescriptor', this.utfVersion) 
            //                 .ele(this.pointSymbolizer)
            //                  .end({ pretty: true });
            // console.log(xml);    
    }
}
