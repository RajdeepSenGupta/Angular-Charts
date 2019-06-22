import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {

  doughnutChartLabels: string[] = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];

  doughnutChartData: number[] = [120, 150, 180, 90];

  doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() { }
}
