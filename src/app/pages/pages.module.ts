import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
