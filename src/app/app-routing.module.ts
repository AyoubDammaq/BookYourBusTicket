import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListComponent } from './pages/bus-list/bus-list.component';
import { HomeComponent } from './pages/home/home.component';
import { AddBusComponent } from './pages/add-bus/add-bus.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'bus-list', component: BusListComponent},
  {path: 'add-bus', component: AddBusComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
