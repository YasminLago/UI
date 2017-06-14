import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, 
         FormGroup, 
         Validators, 
         FormBuilder, 
         FormArray } from '@angular/forms';

import { XMLService } from "../../services/XMLService";


@Component({
  selector: 'my-point-tab',
  templateUrl: './point-tab.component.html',
  styleUrls: ['./point-tab.component.css']
})
export class PointTabComponent {

  @Input() opacityActive: boolean;
  pointTabForm: FormGroup;
  @Input('attr-name') attrName: string;

  pointControl: FormControl;
  innerDataCache = {};

  constructor(private xmlService: XMLService) {
    this.pointTabForm = new FormGroup({});
    this.pointTabForm.valueChanges.subscribe((value: any) => {
      this.onInnerFormGroupChange({ id:'point', values: this.pointTabForm.value });
    });
  }

  /**
   * Recibe los valores de los FormGroups 
   * borderForm, generalForm y pointTabForm
   */
  onInnerFormGroupChange(arg) {
    this.innerDataCache[arg.id] = arg.values;
    //console.log("POINT TAB", this.innerDataCache);
    this.xmlService.setXMLValues(this.innerDataCache); //Envía los datos a XMLService
  }

  

  /* activeOpacity(value:boolean){
     this.opacityActive = value;
     console.log(this.opacityActive);
   }*/
}
