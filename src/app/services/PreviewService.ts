import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PreviewService{

    private symbolCombo = new Subject<string>();
    private typeCombo = new Subject<string>();
    private image = new Subject<string>();
    private opacitySlider = new Subject<number>();
    private widthSlider = new Subject<number>();
    private sizeSlider = new Subject<number>();
    private separationSlider = new Subject<number>();
    private rotate = new Subject<number>();
    private colorButton = new Subject<string>();

    symbolCombo$ = this.symbolCombo.asObservable();
    typeCombo$ = this.typeCombo.asObservable();
    image$ = this.image.asObservable();
    opacitySlider$ = this.opacitySlider.asObservable();
    widthSlider$ = this.widthSlider.asObservable();
    sizeSlider$ = this.sizeSlider.asObservable();
    separationSlider$ = this.separationSlider.asObservable();
    rotate$ = this.rotate.asObservable();
    colorButton$ = this.colorButton.asObservable();

    setSymbolCombo(symbol:string) {
        this.symbolCombo.next(symbol);
    }

    setTypeCombo(type:string) {
        this.typeCombo.next(type);
    }

    setImage(image:string) {
        this.image.next(image);
    }

    setOpacitySlider(opacity:number) {
        this.opacitySlider.next(opacity);
    }

    setWidthSlider(width:number) {
        this.widthSlider.next(width);
    }

    setSizeSlider(size:number) {
        this.sizeSlider.next(size);
    }

    setSeparationSlider(separation:number) {
        this.separationSlider.next(separation);
    }

    setRotate(rotate:number) {
        this.rotate.next(rotate);
    }

    setColorButton(color:string) {
        this.colorButton.next(color);
    }

}
