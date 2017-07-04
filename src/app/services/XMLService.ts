/**
 * Recibe los datos contenidos en el FormGroup de
 * point-tab y los incluye en el XML
 */


/**
 * Clases para la creación del XML
 * https://www.npmjs.com/package/xmlbuilder 
 * https://www.npmjs.com/package/xml-writer
 */
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

        
    setXMLValues(value:any) {
        // console.log(value);
        this.valueGeneral = value.general;
        this.valueBorder = value.border;

        this.pointValue = value.point != undefined ? value.point.point : null;

        this.symbolValue = this.valueGeneral != undefined ? this.valueGeneral.symbol : null;

        this.imageValue = this.valueGeneral != undefined ? this.valueGeneral.external_image : null;
        this.sizeValue = this.valueGeneral != undefined ? this.valueGeneral.size : null;

        this.checkWidth = this.valueBorder != undefined ? this.valueBorder.check_width : null;
        this.widthValue = this.valueBorder != undefined ? this.valueBorder.width : null;
    }

}
