import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighchartComponent } from './component/highchart.component';

@NgModule({
  declarations: [
    AppComponent,
    HighchartComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    HighchartComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
