import { AppComponent } from './../../app.component';
import { HomeComponent } from './../../components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErroComponent } from 'src/app/components/erro/erro.component';
import { Exemplo01Component } from 'src/app/components/exemplo01/exemplo01.component';
import { Exemplo02Component } from 'src/app/components/exemplo02/exemplo02.component';
import { Exemplo03Component } from 'src/app/components/exemplo03/exemplo03.component';
import { Exemplo04Component } from 'src/app/components/exemplo04/exemplo04.component';
import { PeopleFormComponent } from 'src/app/components/people-form/people-form.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "ex",  component: AppComponent },
  { path: "exemplo01",  component: Exemplo01Component },
  { path: "exemplo02",  component: Exemplo02Component },
  { path: "exemplo03",  component: Exemplo03Component },
  { path: "exemplo04",  component: Exemplo04Component },
  { path: "peopleForm",  component: PeopleFormComponent },
  { path: "**", component: ErroComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
