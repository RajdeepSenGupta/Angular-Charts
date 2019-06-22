import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-scatter-chart',
  templateUrl: './my-scatter-chart.component.html',
  styleUrls: ['./my-scatter-chart.component.css']
})
export class MyScatterChartComponent implements OnInit {

  scatterChartOptions: any = {
    responsive: true,
  };

  scatterChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  scatterChartData: any[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];

  scatterChartType: string = 'scatter';

  scatterChartColors: any[] = [
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
}
