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


    attr = "name";
    fill_attr_cssParameter: string [] =  [ 
                                            "fill",
                                            "fill-opacity"
                                          ];
    stroke_attr_cssParameter: string [] =  [
                                              "stroke",
                                              "stroke-width",
                                              "stroke-opacity",
                                              "stroke-linejoin",
                                              "stroke-linecap",
                                              "stroke-dasharray",
                                              "stroke-dashoffset"
                                            ];                
    value:any;

    builder = require('xmlbuilder');
    xml = this.builder.create(this.styleLayerDesc, this.utfVersion).att(this.styleLayerAttr);
    
    getXMLValues() {
        return console.log("GETDATOS XML: ", this.value);
    }

    setXMLValues(value:any) {
        this.value = value;

        console.log("blublu",value);
        console.log("SETDATOS XML: ", this.value);
    }

    createXMLPoint() {
        this.append2xml(this.xml, this.namedLayer, false);
            this.append2xml(this.xml, this.userLayer, false);
                this.append2xml(this.xml, this.featureType, false);
                    this.append2xml(this.xml, this.rule, false);
                        this.append2xml(this.xml, this.pointSymbolizer, false);
                            this.append2xml(this.xml, this.graphic, false);
                            this.append2xml(this.xml, this.size, false);
                            this.append2xml(this.xml, this.opacity, true);
                            this.append2xml(this.xml, this.rotation, true);
                            this.append2xml(this.xml, this.mark, true);
                                this.append2xml(this.xml, this.wellKnownName, false);
                                this.append2xml(this.xml, this.stroke, true);
                                    this.append2xml(this.xml, this.cssParameter, false);
                                this.append2xml(this.xml, this.fill, true);
                                    this.append2xml(this.xml, this.cssParameter, false);

        console.log(this.xml.end({ pretty: true })); 

        //  this.xml = this.xml.ele(this.namedLayer);
        //     this.xml = this.xml.ele(this.userStyle);
        //         this.xml = this.xml.ele(this.featureType);
        //             this.xml = this.xml.ele(this.rule);
        //                 this.xml = this.xml.ele(this.pointSymbolizer);
       
        //                     this.xml = this.xml.ele(this.graphic);
        //                     this.xml = this.xml.ele(this.size, 40);
        //                     this.xml = this.xml.ele(this.opacity, 40);
        //                     this.xml = this.xml.ele(this.rotation, 40);
        //                     this.xml = this.xml.up().ele(this.mark);
         
        //  this.xml = this.xml.ele(this.wellKnownName, 'circle');
         
        //  this.xml =  this.xml.up().ele('Stroke');
         
        //  this.xml = this.xml.ele(this.cssParameter, {attr : 'stroke'});
        //  this.xml = this.xml.up().ele(this.fill);
        //  this.xml = this.xml.ele(this.cssParameter, {attr : 'fill'}, '#F54223');
         
         
        //var builder = require('xmlbuilder');
        //var xml = builder.create('StyledLayerDescriptor', this.utfVersion) 
            //                 .ele(this.pointSymbolizer)
            //                  .end({ pretty: true });
            // console.log(xml);    
    }

    append2xml(xml:any, attrname?:string, samelevel?:boolean) {
            if(samelevel) {
               this.xml = xml.up().ele(attrname);
            }
            else {
               this.xml = xml.ele(attrname);
            }
            // xml = xml.ele(attrname,{ key : value});
            // xml = xml.ele(attrname);
            // xml = xml.ele(attrname, value);
            
    }

}

