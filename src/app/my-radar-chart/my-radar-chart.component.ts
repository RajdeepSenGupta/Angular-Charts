import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css']
})
export class MyRadarChartComponent implements OnInit {

  radarChartLabels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];

  radarChartData: any[] = [
    { data: [120, 130, 180, 70], label: '2017' },
    { data: [90, 150, 200, 45], label: '2018' }
  ];

  radarChartType: string = 'radar';

  constructor() { }

  ngOnInit() { }
}
