import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { StatusCheckComponent } from "./dashboard/status-check/status-check.component";
import { HomepageComponent } from "./dashboard/homepage/homepage.component";
const routes: Routes = [{path:'', component:HomepageComponent, pathMatch:'full'},
// {path: '', redirectTo: 'homepage', pathMatch: 'full'},
{path:'status-check',component:StatusCheckComponent},
{path:'homepage',component:HomepageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
