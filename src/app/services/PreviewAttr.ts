import { Subject } from 'rxjs/Subject';

export class PreviewAttr {


    constructor(){}

    //Sources
    private anyProperty = new Subject<string>();

    private symbol = new Subject<string>();
    private type = new Subject<string>();
    private image = new Subject<string>();
    private opacity = new Subject<number>();
    private width = new Subject<number>();
    private size = new Subject<number>();
    private separation = new Subject<number>();
    private rotate = new Subject<number>();
    private color = new Subject<string>();


    //Streams
    anyProperty$ = this.anyProperty.asObservable();

    symbol$ = this.symbol.asObservable();
    type$ = this.type.asObservable();
    image$ = this.image.asObservable();
    opacity$ = this.opacity.asObservable();
    width$ = this.width.asObservable();
    size$ = this.size.asObservable();
    separation$ = this.separation.asObservable();
    rotate$ = this.rotate.asObservable();
    color$ = this.color.asObservable();


    getAnyProperty() {
        return this.anyProperty;
    }

    setAnyProperty(anyProperty:any) {
        this.anyProperty = anyProperty;
    }

    getSymbol() {
        return this.symbol;
    }
    setSymbol (symbol:any) {
        this.symbol = symbol;
    }


    getType() {
        return this.type;
    }

    setType (type:any) {
        this.type = type;
    }

    getImage() {
        return this.image;
    }

    setImage (image:any) {
        this.image = image;
    }

    getOpacity() {
        return this.opacity;
    }
    setOpacity(opacity:any) {
        this.opacity = opacity;
    }

    getWidth() {
        return this.width;
    }
    setWidth(width:any) {
        this.width = width;
    }

    getSize() {
        return this.size;
    }
    setSize (size:any) {
        this.size = size;
    }

    getSeparation() {
        return this.separation;
    }
    setSeparation(separation:any) {
        this.separation = separation;
    }

    getRotate() {
        return this.rotate;
    }
    setRotate (rotate:any) {
        this.rotate = rotate;
    }

    getColor() {
        return this.color;
    }
    setColor (color:any) {
        this.color = color;
    }

}