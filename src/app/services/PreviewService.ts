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

    constructor() {}

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

    setOpacity(opacity:number) {
        this.previewAttr.setOpacity(opacity);
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
        }

    }

}
