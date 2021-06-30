import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SolarComponent } from "./solar/solar.component";
import { IctDetailComponent } from "./ict-detail/ict-detail.component";
import { WaterDetailComponent } from "./water-detail/water-detail.component";
import { ContactComponent } from "./contact/contact.component";



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
    path: 'ict-solutions',
    component: IctDetailComponent
  },
  {
    path: 'water-solutions',
    component: WaterDetailComponent
  },
  {
    path: 'company/contact',
    component: ContactComponent
  },
  {
    path: '**', component: HomeComponent
  },
  {
    path: ' ', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top', useHash: true, anchorScrolling: 'enabled'
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
