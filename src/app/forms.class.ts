import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


export class Forms {

    form:FormGroup;
    attrName:string;
    control: FormControl;

    constructor() {
        // this.form = form;
        // this.attrName = attrName;
        // this.control = control;
    }

    getForm() {
        return this.form;
    }
    setForm(form: FormGroup) {
        this.form = form;
    }

    getAttrName() {
        return this.attrName;
    }
    setAttrName(attrName: string) {
        this.attrName = attrName;
    }

    getControl() {
        return this.control;
    }
    setControl(control: FormControl) {
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