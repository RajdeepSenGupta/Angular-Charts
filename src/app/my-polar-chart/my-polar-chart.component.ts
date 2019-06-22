import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-polar-chart',
  templateUrl: './my-polar-chart.component.html',
  styleUrls: ['./my-polar-chart.component.css']
})
export class MyPolarChartComponent implements OnInit {

  polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];

  polarAreaChartData: number[] = [300, 500, 100, 40, 120];

  polarAreaLegend: boolean = true;

  polarAreaChartType: string = 'polarArea';

  constructor() { }

  ngOnInit() { }
}
