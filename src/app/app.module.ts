import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { SubListPipe } from './pipes/sub-list.pipe';
import { AgeplusPipe } from './pipes/ageplus.pipe';
import { NamesizePipe } from './pipes/namesize.pipe';
import { Exemplo01Component } from './components/exemplo01/exemplo01.component';
import { Exemplo02Component } from './components/exemplo02/exemplo02.component';
import { Exemplo03Component } from './components/exemplo03/exemplo03.component';
import { Exemplo04Component } from './components/exemplo04/exemplo04.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { PrimaryComponent } from './components/primary/primary.component';
import { ErroComponent } from './components/erro/erro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SubListPipe,
    AgeplusPipe,
    NamesizePipe,
    Exemplo01Component,
    Exemplo02Component,
    Exemplo03Component,
    Exemplo04Component,
    MenuComponent,
    HomeComponent,
    PrimaryComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PrimaryComponent]
})
export class AppModule { }
