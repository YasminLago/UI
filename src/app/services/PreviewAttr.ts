import { Subject } from 'rxjs/Subject';

export class PreviewAttr {

    constructor(){}

    //Sources
    private symbol = new Subject<string>();
    private type = new Subject<string>();
    private image = new Subject<string>();
    private externalImage = new Subject<boolean>();
    private opacity = new Subject<number>();
    private width = new Subject<number>();
    private checkWidth = new Subject<boolean>();
    private size = new Subject<number>();
    private separation = new Subject<number>();
    private rotate = new Subject<number>();
    private color = new Subject<string>();

    //text
    private displacement = new Subject<string>();
    private anchor = new Subject<string>();
    private perpOff = new Subject<string>();
    private fontText = new Subject<string>();
    private fontStyle = new Subject<string>();
    private fontWeight = new Subject<string>();


    //Streams
    symbol$ = this.symbol.asObservable();
    type$ = this.type.asObservable();
    image$ = this.image.asObservable();
    externalImage$ = this.externalImage.asObservable();
    opacity$ = this.opacity.asObservable();
    width$ = this.width.asObservable();
    checkWidth$ = this.checkWidth.asObservable();
    size$ = this.size.asObservable();
    separation$ = this.separation.asObservable();
    rotate$ = this.rotate.asObservable();
    color$ = this.color.asObservable();


    //text
    displacement$ = this.displacement.asObservable();
    anchor$ = this.anchor.asObservable();
    perpOff$ = this.perpOff.asObservable();
    fontText$ = this.fontText.asObservable();
    fontStyle$ = this.fontStyle.asObservable();
    fontWeight$ = this.fontWeight.asObservable();


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

    getExternalImage() {
        return this.externalImage;
    }
    setExternalImage (externalImage:any) {
        this.externalImage = externalImage;
    }

    getOpacity() {
        return this.opacity;
    }
    setOpacity(opacity:any) {
        this.opacity = opacity;
    }

    setCheckWidth(checkWidth:any) {
        this.checkWidth = checkWidth;
    }
    getCheckWidth() {
        return this.checkWidth;
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

    //text

    getDisplacement() {
        return this.displacement;
    }
    setDisplacement (displacement:any) {
        this.displacement = displacement;
    }
    getAnchor() {
        return this.anchor;
    }
    setAnchor (anchor:any) {
        this.anchor = anchor;
    }
    getPerpOff() {
        return this.perpOff;
    }
    setPerpOff(perpOff:any) {
        this.perpOff = perpOff;
    }
    
    getFontText() {
        return this.fontText;
    }
    setFontText (fontText:any) {
        this.fontText = fontText;
    }
    
    getFontStyle() {
        return this.fontStyle;
    }
    setFontStyle (fontStyle:any) {
        this.fontStyle = fontStyle;
    }
    
    getFontWeight() {
        return this.fontWeight;
    }
    setFontWeight (fontWeight:any) {
        this.fontWeight = fontWeight;
    }

}