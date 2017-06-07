import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, 
         FormGroup, 
         Validators, 
         FormBuilder, 
         FormArray } from '@angular/forms';

@Injectable()
export class XMLService {

    values:any;

    getXMLValues() {
        return console.log("GETDATOS XML: ", this.values);
    }

    setXMLValues(value:any) {
        this.values = value;
        console.log("SETDATOS XML: ", value);
    }
}