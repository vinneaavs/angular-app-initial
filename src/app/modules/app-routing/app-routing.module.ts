import { AppComponent } from './../../app.component';
import { HomeComponent } from './../../components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path : ""},
  { path : "home", component: HomeComponent},
  { path : "exemplos", component: AppComponent},
  { path : "**"}
];

@NgModule({
  declarations: [],
  imports: [

  ]
})
export class AppRoutingModule { }
