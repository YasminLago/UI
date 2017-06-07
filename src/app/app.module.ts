import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCheckboxModule, 
        MdSliderModule, 
        MdButtonModule, 
        MdTabsModule,
        MdSelectModule,
        MdOptionModule,
        MdIconModule,
        MdButtonToggleModule,
        MdInputModule } from '@angular/material';

import { PreviewService } from "./services/PreviewService";
import { XMLService } from "./services/XMLService";



import { AppComponent } from './app.component';
import { BorderStyleComponent } from './components/border-style/border-style.component';
import { SliderComponent } from './components/slider/slider.component';
import { RotateComponent } from "./components/rotate/rotate.component";
import { ComboDataComponent} from "./components/combo-data/combo-data.component";
import { ImageComponent } from "./components/image/image.component";
import { PreviewComponent } from "./components/preview/preview.component";
import { SaveCancelComponent } from "./components/save-cancel/save-cancel.component";
import { CreateButtonComponent } from "./components/create-button/create-button.component";
import { ColorButtonComponent } from "./components/color-button/color-button.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { LineTabComponent } from "./components/line-tab/line-tab.component";
import { TextTabComponent } from "./components/text-tab/text-tab.component";
import { PointTabComponent } from "./components/point-tab/point-tab.component";
import { PolygonTabComponent } from "./components/polygon-tab/polygon-tab.component";
import { GeneralComponent } from "./components/general/general.component";
import { GeneralTextComponent } from "./components/general-text/general-text.component";
import { XmlButtonComponent } from "./components/xml-button/xml-button.component";

//import {ColorPickerModule} from 'angular2-color-picker';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    BorderStyleComponent,
    SliderComponent,
    RotateComponent,
    ComboDataComponent,
    ImageComponent,
    PreviewComponent,
    SaveCancelComponent,
    CreateButtonComponent,
    ColorButtonComponent,
    CheckboxComponent,
    LineTabComponent,
    TextTabComponent,
    PointTabComponent,
    GeneralComponent,
    PolygonTabComponent,
    GeneralTextComponent,
    XmlButtonComponent
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdSliderModule,
    MdButtonModule,
    MdTabsModule,
    MdSelectModule,
    MdOptionModule,
    MdIconModule,
    MdButtonToggleModule,
    MdInputModule
   // ColorPickerModule
  ],
  providers: [
              PreviewService,
              XMLService,
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
