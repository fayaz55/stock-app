import { Component, OnInit, Input} from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { DataService } from 'src/shared/data.service';
import { switchMap } from 'rxjs/operators';
import { StockInfo } from 'src/models/stock-info';

@Component({
  selector: 'app-ticker-info',
  templateUrl: './ticker-info.component.html',
  styleUrls: ['./ticker-info.component.css']
})
export class TickerInfoComponent implements OnInit {
  @Input() ticker: string;
  constructor(private dataService: DataService) { }

stockInfo: StockInfo
subscription: Subscription;
stockInformation: any;
ngOnInit(): void {
    this.stockInfo = null;
    if(this.ticker && this.ticker !== ''){
        this.subscription = timer(0, 1000)
        .pipe(switchMap(() =>this.dataService.getStockInformation(this.ticker)))
        .subscribe(result => {
            let response: any;
            response = result;
            if(response.pagination.total > 0){
              this.stockInformation = response.data;
                this.stockInfo = new StockInfo();
                console.log(this.stockInformation);
                this.stockInfo.displayName = this.stockInformation[0].symbol;
                this.stockInfo.currentPrice = this.stockInformation[0].close;
                this.stockInfo.changeinPoints = this.stockInformation[0].close - this.stockInformation[0].open;
                this.stockInfo.isPositive = (this.stockInformation[0].close - this.stockInformation[0].open) > 0 ? true : false;
                this.stockInfo.percentageGains = ((this.stockInformation[0].close - this.stockInformation[0].open) /this.stockInformation[0].open) * 100;
                this.stockInfo.exchangeName = this.stockInformation[0].exchange;
                this.stockInfo.closePrice = this.stockInformation[0].close;
                this.stockInfo.openPrice = this.stockInformation[0].open;
                this.stockInfo.highPrice = this.stockInformation[0].high;
                this.stockInfo.lowPrice = this.stockInformation[0].low;
                this.stockInfo.volume = this.stockInformation[0].volume;
            }
         });
      }
}
ngOnDestroy(){
    this.stockInformation = null;
    this.subscription.unsubscribe();
  }

}
