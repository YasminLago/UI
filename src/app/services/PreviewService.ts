import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PreviewService {


    PreviewAttr previewAtrr;
    //Sources
    private symbol = new Subject<string>();
    private type = new Subject<string>();
    private image = new Subject<string>();
    private opacity = new Subject<number>();
    private width = new Subject<number>();
    private size = new Subject<number>();
    private separation = new Subject<number>();
    private rotate = new Subject<number>();
    private color = new Subject<string>();
    private anyProperty = new Subject<string>();

    //Streams
    symbol$ = this.symbol.asObservable();
    type$ = this.type.asObservable();
    image$ = this.image.asObservable();
    opacity$ = this.opacity.asObservable();
    width$ = this.width.asObservable();
    size$ = this.size.asObservable();
    separation$ = this.separation.asObservable();
    rotate$ = this.rotate.asObservable();
    color$ = this.color.asObservable();

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
        this.symbol.next(symbol);
    }

    setType(type:string) {
        this.type.next(type);
    }

    setImage(image:string) {
        this.image.next(image);
    }

    setOpacity(opacity:number) {
        this.opacity.next(opacity);
    }

    setWidth(width:number) {
        this.width.next(width);
    }

    setSize(size:number) {
        this.size.next(size);
        this.anyProperty.next(previewAttr);
    }

    getSize():any {
        return this.size;
    }

    setSeparation(separation:number) {
        this.separation.next(separation);
    }

    setRotate(rotate:number) {
        this.rotate.next(rotate);
    }

    setColorButton(color:string) {
        this.color.next(color);
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
