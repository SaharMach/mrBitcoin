import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  private baseUrl = 'https://api.blockchain.info/charts';

  constructor(private http: HttpClient) { }


  public getRate(usdValue: number): Observable<number> {
    const url = `https://blockchain.info/tobtc?currency=USD&value=${usdValue}`;
    return this.http.get<number>(url)
        .pipe(
            tap(rate => console.log(`Rate for USD ${usdValue}: ${rate} BTC`)),
            retry(1),
            catchError(this._handleError))
  }   
  getMarketPrice(timespan: string = '5months'): Observable<any> {
    return this.http.get(`${this.baseUrl}/market-price?timespan=${timespan}&format=json&cors=true`);
  }

  getTradeVolume(timespan: string = '5months'): Observable<any> {
    return this.http.get(`${this.baseUrl}/trade-volume?timespan=${timespan}&format=json&cors=true`);
  }

  getAvgBlockSize(timespan: string = '5months'): Observable<any> {
    return this.http.get(`${this.baseUrl}/avg-block-size?timespan=${timespan}&format=json&cors=true`);
  }
  private _handleError(err: HttpErrorResponse) {
    console.log('err:', err)
    return throwError(() => err)
  }

}
