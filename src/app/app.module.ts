import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { HighchartComponent } from './component/highchart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HighchartComponent,
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HighchartComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
