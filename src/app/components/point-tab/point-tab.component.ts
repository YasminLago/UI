import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { XMLService } from "../../services/XMLService";


@Component({
  selector: 'my-point-tab',
  templateUrl: './point-tab.component.html',
  styleUrls: ['./point-tab.component.css']
})
export class PointTabComponent {

  @Input() opacityActive:boolean;
  pointTabForm: FormGroup;
  @Input('attr-name') attrName:string;

  constructor(private xmlService: XMLService) { 
    this.pointTabForm = new FormGroup({});
    this.pointTabForm.valueChanges.subscribe((value: any) => {
      console.log('valuechangesPOINTTAB',value);
      if(value) {
        xmlService.setXMLValues(value);
      }
    });
  }

 /* activeOpacity(value:boolean){
    this.opacityActive = value;
    console.log(this.opacityActive);
  }*/
}
