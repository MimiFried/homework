import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherPgComponent } from './weather-pg/weather-pg.component';

const routes: Routes = [
    {
        path: 'weatherpg',
        component: WeatherPgComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }