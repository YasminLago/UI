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
        // namedLayer = "NamedLayer";
        //     layerName = "Name";
        //     description = "Description";
        //     namedStyle = "NamedStyle";
        //     layerUserStyle = "UserStyle";

        // userLayer = "UserLayer";
        //     userName = "Name";
        //     userDescription = "Description";
        //     inFeature = "InlineFeature";
        //     userStyle = "UserStyle";
        //         name = "Name";
        //         title = "Title";
        //         abstr = "Abstract";
        //         default = "IsDefault";
        //         featureType = "FeatureTypeStyle";
        //             // name = "name";
        //             // title = "Title";
                     
point = "PointSymbolizer";
graphic = "Graphic";
mark = "Mark";
wellKnownName = "WellKnownName";
fill = "Fill";
cssParameter = "CssParameter";
size = "Size";



    value:any = {};
    
    getXMLValues() {
        return console.log("GETDATOS XML: ", this.value);
    }


    setXMLValues(value:any) {
        this.value = value;
        console.log("blublu",this.value);
        console.log("SETDATOS XML: ", this.value);
    }

    createXML() {
        var builder = require('xmlbuilder');
        var xml = builder.create('StyledLayerDescriptor', this.utfVersion) 
                            .ele(this.point, this.value.point.point)
                             .end({ pretty: true });
            console.log(xml); 
                    

                                                      
    }


}

