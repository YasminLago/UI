export class Attribute {

 ATTR: any [] = [
      'symbol',
      'type',
      'externalImage',
      'opacity',
      'width',
      'size',
      'rotate',
      'separation',
      'color',
      'distance',
      'position'
  ];

  constructor() {}

  setAttrs(attr:any) {
    for (let i=0; i < this.ATTR.length; i++){
      let attribute = this.ATTR [attr];
      console.log(this.ATTR [attr]);
      return attribute;
    }
  }
}