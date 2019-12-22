import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.scss']
})
export class HighchartComponent {

  @ViewChild('highcharts') highcharts: ElementRef;

  // tslint:disable-next-line:variable-name
  private _highchartsSettings: any;

  @Input()
  set highchartsSettings(highchartsSettings: any) {
    if (highchartsSettings) {
      this._highchartsSettings = highchartsSettings;
      setTimeout(() => this.renderHighcharts());
    }
  }
  get highchartsSettings() {
    return this._highchartsSettings;
  }

  renderHighcharts() {
    Highcharts.setOptions({
      plotOptions: {
        series: {
          animation: false
        }
      },
      lang: {
        thousandsSep: ','
      },
      chart: {
        style: {
          fontFamily: 'Roboto'
        }
      }
    });
    Highcharts.chart(this.highcharts.nativeElement, this.highchartsSettings);
  }
}
