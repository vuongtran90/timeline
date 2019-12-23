import {
  Component,
  OnInit
} from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  highchartsSettings;
  title = 'timeline';
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.initHighcharts();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      animations: this.formBuilder.array([this.createAnimation()])
    });
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

  public addAnimation(): void {
    const animations = this.form.get('animations') as FormArray;
    animations.push(this.createAnimation());
  }

  public removeAnimation(index: number): void {
    const animations = this.form.get('animations') as FormArray;
    animations.removeAt(index);
  }

  private createAnimation(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      delay: [''],
      duration: [''],
      color: [],
      thumbnail: [''],
    });
  }

  public submit() {
    console.log(this.form);
  }
}
