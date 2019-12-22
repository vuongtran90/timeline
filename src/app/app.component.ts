import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  highchartsSettings;
  title = 'timeline';

  ngOnInit() {
    this.initHighcharts();
  }

  initHighcharts() {
    this.highchartsSettings = {
      chart: {
        type: 'bar'
      },
      title: {
        text: null
      },
      xAxis: {
        categories: ['circle', 'square', 'border']
      },
      yAxis: {
        min: 0
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        data: [{
            y: 5,
            color: 'rgb(0,255,0)'
          },
          {
            y: 3,
            color: 'red'
          }
        ],
        showInLegend: false,
      }, {
        data: [{
            y: 4,
            color: 'rgba(255,255,255,0)'
          },
          {
            y: 2,
            color: 'rgba(255,255,255,0)'
          }
        ],
        showInLegend: false,
      }]
    };
  }
}
