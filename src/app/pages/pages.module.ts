import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SharesModule } from '../shared/shares.module';


import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    DashboardComponent,
   ProgressComponent,
   Grafica1Component,
   PagesComponent
  ],

  exports:[ 
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent],

  imports:[
    CommonModule,
    SharesModule,
    RouterModule] 
  
})
export class PagesModule { }
