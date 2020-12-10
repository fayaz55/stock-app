import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api = 'http://api.marketstack.com/v1/eod?access_key={1}&symbols={0}&limit=1'

  private accesskey = '252259e766af0d7bc744acf833d2b096'; // Place Access Key Here
  constructor(private http: HttpClient) { }

  public getStockInformation(ticker){

    let api = this.api.replace('{0}', ticker);
    api = api.replace('{1}', this.accesskey);

    return this.http.get(api)


    //return this.http.get('/assets/test-data.json');
  }

}
