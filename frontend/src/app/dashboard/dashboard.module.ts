import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreInComponent } from './store-in/store-in.component';
import { StatusCheckComponent } from './status-check/status-check.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    StoreInComponent,
    StatusCheckComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
