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
    ButtonComponent
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
