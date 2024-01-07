import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'market-price-chart',
  template: `
    <div class="chart">
      <canvas #chartCanvas style="height: 400px; max-width: 100%;"></canvas>
    </div>
  `,
  styles: [``]
})
export class MarketPriceChartComponent implements OnInit {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor(private bitcoinService: BitcoinService) {}

  ngOnInit(): void {
    this.bitcoinService.getMarketPrice().subscribe(response => {
        console.log('response:', response)
      this.createChart(response.values);
    });
  }

  createChart(values: any[]): void {
    const data = {
      labels: values.map((v: any) => new Date(v.x * 1000)),
      datasets: [{
        label: 'Bitcoin Market Price',
        data: values.map((v: any) => v.y),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'line',
      data: data,
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            },
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Price (USD)'
            }
          }
        }
      }
    })
  }
}
