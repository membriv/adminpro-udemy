import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-donut',
  templateUrl: './grafico-donut.component.html'
})
export class GraficoDonutComponent implements OnInit {
  @Input() public doughnutChartLabels: string[];
  @Input() public doughnutChartData: number[];
  @Input() public doughnutChartType: string;
  @Input() public leyenda: string;

  constructor() { }

  ngOnInit() {
  }

}
