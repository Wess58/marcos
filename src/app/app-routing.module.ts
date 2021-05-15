import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SolarComponent } from "./solar/solar.component";




const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'company',
    component: AboutComponent
  },
  {
    path: 'solar-solutions',
    component: SolarComponent
  },
  {
    path: '**', component: HomeComponent
  },
  {
    path: ' ', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
