import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stocks-project';
  stocks = [
    { symbol: 'TSLA', name: 'Tesla, Inc.'},
    { symbol: 'MSFT', name: 'Microsoft Corporation'},
    { symbol: 'FOOD', name: 'Goodfood Market Corp'},
    { symbol: 'AAPL', name: 'Apple Inc'},
    { symbol: 'PLTR', name: 'Palantir Technologies Inc'},
    { symbol: 'AMD', name: 'Advanced Micro Devices, Inc.'},
  ];

  selectedStock: string;

  ngOnInit(){
    this.selectedStock = '';
  }

  stockClicked(symbol){
    this.selectedStock = symbol;
  }

}
