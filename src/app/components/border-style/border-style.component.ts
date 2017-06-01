import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'border-style',
  templateUrl: './border-style.component.html',
  styleUrls: ['./border-style.component.css',
    '../../styles/buttonStyle.css']
})

export class BorderStyleComponent {

  @Input('text-label') textLbl: string;

  @Input('show-lbl') lbl: boolean = true;
  @Input('show-check') check: boolean = true;
  @Input('show-combo') combo: boolean = true;
  @Input('show-width-slider') widthSlider: boolean = true;
  @Input('show-opacity-slider') opacitySlider: boolean = true;
  @Input('show-separation-slider') separationSlider: boolean = true;
  @Input('show-position-slider') positionSlider: boolean = true;
  @Input('show-distance-slider') distanceSlider: boolean = true;
  @Input('show-size-slider') sizeSlider: boolean = true;
  @Input('show-color-button') colorButton: boolean = false;
  @Input('show-image') image: boolean = true;
  @Input('show-rotate') rotate: boolean = true;

  public borderForm: FormGroup;

  constructor() {
    this.borderForm = new FormGroup({});
    this.borderForm.valueChanges.subscribe((value: any) => {
      console.log('valuechangesborder',value);
    });
    //     check_width: new FormControl(),
    //     type: new FormControl(),
    //     externalImage: new FormControl(),
    //     width: new FormControl(),
    //     opacity: new FormControl(),
    //     separation: new FormControl(),
    //     size: new FormControl(),
    //     distance: new FormControl(),
    //     position: new FormControl(),
    //     rotate: new FormControl(),
    //     color: new FormControl(),
    // });
    // console.log("Constructor border: " + this.form.value);
  }

  getJson() {
    //this.form = new FormGroup({});
    //     check_width: new FormControl(),
    //     type: new FormControl(),
    //     externalImage: new FormControl(),
    //     width: new FormControl(),
    //     opacity: new FormControl(),
    //     separation: new FormControl(),
    //     size: new FormControl(),
    //     distance: new FormControl(),
    //     position: new FormControl(),
    //     rotate: new FormControl(),
    //     color: new FormControl(),
    // });
    console.log("getJSON: ", this.borderForm.value);
  }

  visible(): boolean {
    return false;
  }
  hide(): boolean {
    return true;
  }
}
