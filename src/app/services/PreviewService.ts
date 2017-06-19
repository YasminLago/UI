/**
 * Recibe los valores de los componentes que después
 * serán utilizados en el componente preview 
 */

import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PreviewAttr } from "./PreviewAttr";

@Injectable()
export class PreviewService {

    previewAttr = new PreviewAttr();

    private anyProperty = new Subject<any>();
    anyProperty$ = this.anyProperty.asObservable();

    //Attributes
    //Sliders
    public size_attr = "size";
    public opacity_attr = "opacity";
    public width_attr = "width";
    public separation_attr = "separation";

    //Image
    public image_attr = "external_image";
    
    //Rotate Buttons
    public rotate_attr = "rotate";

    //Color Button
    public color_attr = "color";

    //ComboBox
    public symbol_attr = "symbol";
    public type_attr = "type";

    //CheckBox
    public checkWidth_attr = "check_width";

    //Text
    public displacement_attr = "displacement";
    public anchor_attr = "anchor";
    public perpOff_attr = "perp_off";
    public fontText_attr = "font_text";
    public fontStyle_attr = "font_style";
    public fontWeight_attr = "font_weight";


    /**
     * Reciben el valor de setValue y lo envían 
     * a la clase PreviewAttr
     */

    setSymbol(symbol:string) {
        this.previewAttr.setSymbol(symbol);
        this.anyProperty.next(this.previewAttr);
    }

    setType(type:string) {
        this.previewAttr.setType(type);
        this.anyProperty.next(this.previewAttr);
    }

    setImage(image:string) {
        this.previewAttr.setImage(image);
        this.anyProperty.next(this.previewAttr);
    }

    setExternalImage(externalImage:boolean) {
        this.previewAttr.setExternalImage(externalImage);
        this.anyProperty.next(this.previewAttr);
    }

    setOpacity(opacity:number) {
        this.previewAttr.setOpacity(opacity);
        this.anyProperty.next(this.previewAttr);
    }

    setCheckWidth(checkWidth:boolean) {
        this.previewAttr.setCheckWidth(checkWidth);
        this.anyProperty.next(this.previewAttr);
    }

    setWidth(width:number) {
        this.previewAttr.setWidth(width);
        this.anyProperty.next(this.previewAttr);
    }

    setSize(size:number) {
        this.previewAttr.setSize(size);
        this.anyProperty.next(this.previewAttr);
    }

    setSeparation(separation:number) {
        this.previewAttr.setSeparation(separation);
        this.anyProperty.next(this.previewAttr);
    }

    setRotate(rotate:number) {
        this.previewAttr.setRotate(rotate);
        this.anyProperty.next(this.previewAttr);
    }

    setColor(color:string) {
        this.previewAttr.setColor(color);
        this.anyProperty.next(this.previewAttr);
        // console.log("Color en preview Service " + color);
    }


    //Text

    setDisplacement (displacement:number) {
        this.previewAttr.setSymbol(displacement);
        this.anyProperty.next(this.previewAttr);
    }

    setAnchor (anchor:number) {
        this.previewAttr.setSymbol(anchor);
        this.anyProperty.next(this.previewAttr);
    }

    setPerpOff(perpOff:number) {
        this.previewAttr.setSymbol(perpOff);
        this.anyProperty.next(this.previewAttr);
    }
    

    setFontText (fontText:string) {
        this.previewAttr.setSymbol(fontText);
        this.anyProperty.next(this.previewAttr);;
    }
    

    setFontStyle (fontStyle:string) {
        this.previewAttr.setSymbol(fontStyle);
        this.anyProperty.next(this.previewAttr);
    }
    

    setFontWeight (fontWeight:string) {
        this.previewAttr.setSymbol(fontWeight);
        this.anyProperty.next(this.previewAttr);
    }


    /**
     * Recibe los valores de los componentes usados para 
     * la caracterización de las formas.
     * attr: nombre del atributo. Diferencia los distintos componentes
     * value: valor de cada uno de los componentes
     */
    setValue (attr:string, value:any) {
        switch (attr) {
            case this.size_attr: {
                this.setSize(value);
                break;
            }

            case this.opacity_attr: {
                this.setOpacity(value);
                break;
            }

            case this.separation_attr: {
                this.setSeparation(value);
                break;
            }
            
            case this.checkWidth_attr: {
                this.setCheckWidth(value);
            }

            case this.width_attr: {
                this.setWidth(value);
                break;
            }

            case this.image_attr: {
                this.setImage(value);
                break;
            }

            case this.rotate_attr: {
                this.setRotate(value);
                break;
            }

            case this.color_attr: {
                this.setColor(value);
                break;
            }

            case this.symbol_attr: {
                this.setSymbol(value);
                break;
            }

            case this.type_attr: {
                this.setType(value);
                break;
            }

            case this.displacement_attr: {
                this.setDisplacement(value);
                break;
            }

            case this.anchor_attr: {
                this.setAnchor(value);
                break;
            }

            case this.fontStyle_attr: {
                this.setFontStyle(value);
                break;
            }

            case this.fontText_attr: {
                this.setFontText(value);
                break;
            }

            case this.fontWeight_attr: {
                this.setFontWeight(value);
                break;
            }

            case this.perpOff_attr: {
                this.setPerpOff(value);
                break;
            }
        }
    }
}
