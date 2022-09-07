import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
import {createChart} from "lightweight-charts";
import {Trader} from "../trader.interface";

const chartOptions = {  height: 236, layout: { textColor: 'black', background: { type: 'solid', color: 'white' } } };
const data = [{ value: 0, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922 }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722 }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922 }];

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent implements   AfterViewInit {
  @Input() trader: Trader;

  @ViewChild("chart") chartView: ElementRef;

  setData() {

  }
  ngAfterViewInit() {
    // @ts-ignore
    const chart = createChart(this.chartView.nativeElement, chartOptions);
    const lineSeries = chart.addLineSeries({ color: '#8A24F3' });

    for(let i = 0;i < data.length; i++) {
      data[i].value = this.trader.chart[i];
    }

    // @ts-ignore
    lineSeries.setData(data);
    chart.timeScale().fitContent();
  }
}


