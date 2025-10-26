import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BusListComponent } from './pages/bus-list/bus-list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddBusComponent } from './pages/add-bus/add-bus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusListComponent,
    LoginComponent,
    RegisterComponent,
    AddBusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
