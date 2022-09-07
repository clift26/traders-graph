import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TraderDataService} from "../trader-data.service";
import {Trader} from "../trader.interface";
import * as _ from "lodash";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent implements OnInit {
  constructor(
    private readonly traders: TraderDataService
  ) {}

  public readonly viewList: Trader[] = _.sampleSize(this.traders.tradersList,4);
  public activeTrader: Trader = this.viewList[0];

  selectTrader(trader: Trader) {
    this.activeTrader = trader;
  }

  ngOnInit(): void {

  }

}
