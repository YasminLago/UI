import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PreviewAttr } from "./PreviewAttr";

@Injectable()
export class PreviewService {

    previewAttr = new PreviewAttr();

    constructor() {}

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

    setSymbol(symbol:string) {
        this.previewAttr.getSymbol().next(symbol);
    }

    setType(type:string) {
        this.previewAttr.getType().next(type);
    }

    setImage(image:string) {
        this.previewAttr.getImage().next(image);
    }

    setOpacity(opacity:number) {
        this.previewAttr.getOpacity().next(opacity);
    }

    setWidth(width:number) {
        this.previewAttr.getWidth().next(width);
    }

    setSize(size:number) {
        this.previewAttr.getSize().next(size);
        this.previewAttr.getAnyProperty().next(this.previewAttr);
    }

    setSeparation(separation:number) {
        this.previewAttr.getSeparation().next(separation);
    }

    setRotate(rotate:number) {
        this.previewAttr.getRotate().next(rotate);
    }

    setColorButton(color:string) {
        this.previewAttr.getColor().next(color);
    }

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
                this.setColorButton(value);
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
        }

    }

}
