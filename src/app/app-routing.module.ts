import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyPolarChartComponent } from './my-polar-chart/my-polar-chart.component';
import { MyBubbleChartComponent } from './my-bubble-chart/my-bubble-chart.component';
import { MyScatterChartComponent } from './my-scatter-chart/my-scatter-chart.component';

const routes: Routes = [
  { path: 'bar-chart', component: MyBarChartComponent },
  { path: 'doughnut-chart', component: MyDoughnutChartComponent },
  { path: 'radar-chart', component: MyRadarChartComponent },
  { path: 'pie-chart', component: MyPieChartComponent },
  { path: 'line-chart', component: MyLineChartComponent },
  { path: 'polar-chart', component: MyPolarChartComponent },
  { path: 'bubble-chart', component: MyBubbleChartComponent },
  { path: 'scatter-chart', component: MyScatterChartComponent },
  { path: '**', component: MyBarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
