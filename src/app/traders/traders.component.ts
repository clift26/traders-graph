import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Trader} from "../trader.interface";

@Component({
  selector: 'app-traders',
  templateUrl: './traders.component.html',
  styleUrls: ['./traders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradersComponent implements OnInit {
  @Input() trader: Trader;
  @Input() active: string;
  @Output() activeChange = new EventEmitter<Trader>();
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
