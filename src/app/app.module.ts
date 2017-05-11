import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCheckboxModule, 
        MdSliderModule, 
        MdButtonModule, 
        MdTabsModule,
        MdSelectModule,
        MdOptionModule,
        MdIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { BorderStyleComponent } from './components/border-style/border-style.component';
import { SliderComponent } from './components/slider/slider.component';
import { RotateComponent } from "./components/rotate/rotate.component";
import { ComboDataComponent} from "./components/combo-data/combo-data.component";
import { ImageComponent } from "./components/image/image.component";
import { PreviewComponent } from "./components/preview/preview.component";
import { SaveCancelComponent } from "./components/save-cancel/save-cancel.component";
import { ButtonComponent } from "./components/button/button.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { LineTabComponent } from "./components/line-tab/line-tab.component";
import { TextTabComponent } from "./components/text-tab/text-tab.component";
import { PointTabComponent } from "./components/point-tab/point-tab.component";
import { BorderTabComponent } from "./components/border-tab/border-tab.component";
import { GeneralComponent } from "./components/general/general.component";

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
    ButtonComponent,
    CheckboxComponent,
    LineTabComponent,
    TextTabComponent,
    PointTabComponent,
    BorderTabComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdSliderModule,
    MdButtonModule,
    MdTabsModule,
    MdSelectModule,
    MdOptionModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
