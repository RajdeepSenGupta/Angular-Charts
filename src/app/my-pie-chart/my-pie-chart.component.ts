import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {

  pieChartLabels: string[] = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];

  pieChartData: number[] = [120, 150, 180, 90];

  pieChartType: string = 'pie';

  constructor() { }

  ngOnInit() { }
}
