// import { NgModule } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './dashboard/homepage/homepage.component';
import { StoreInComponent } from './dashboard/store-in/store-in.component';
import { StatusCheckComponent } from './dashboard/status-check/status-check.component';

@NgModule
 ({
  declarations: [
    AppComponent,
    HomepageComponent,
    StoreInComponent,
    StatusCheckComponent
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
