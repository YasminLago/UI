import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


export class Forms {

    form:FormGroup;
    attrName:string;
    control: FormControl;

    constructor(form:FormGroup, attrName:string, control: FormControl) {
        this.form = form;
        this.attrName = attrName;
        this.control = control;
    }

    getFormGroup() {
        if (this.form) {
            return this.form;
        } else {
            let arg = {};
            arg[this.attrName] = this.control;
            return new FormGroup(arg);
        }
    }

}