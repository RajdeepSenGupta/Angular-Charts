import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';

@Component({
  selector: 'app-my-bubble-chart',
  templateUrl: './my-bubble-chart.component.html',
  styleUrls: ['./my-bubble-chart.component.css']
})
export class MyBubbleChartComponent implements OnInit {

  bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ]
    }
  };

  bubbleChartType: ChartType = 'bubble';

  bubbleChartLegend: boolean = true;

  bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
      backgroundColor: 'green',
      borderColor: 'blue',
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'red',
    },
  ];

  bubbleChartColors: any[] = [
    {
      backgroundColor: [
        'red',
        'green',
        'blue',
        'purple',
        'yellow',
        'brown',
        'magenta',
        'cyan',
        'orange',
        'pink'
      ]
    }
  ];

  constructor() { }

  ngOnInit() { }

  randomize(): void {
    const numberOfPoints = this.rand(5) + 5;
    const data = Array.apply(null, { length: numberOfPoints }).map(r => this.randomPoint(30));
    this.bubbleChartData[0].data = data;
  }

  rand(max: number) {
    return Math.trunc(Math.random() * max);
  }

  randomPoint(maxCoordinate: number) {
    const x = this.rand(maxCoordinate);
    const y = this.rand(maxCoordinate);
    const r = this.rand(30) + 5;
    return { x, y, r };
  }
}
