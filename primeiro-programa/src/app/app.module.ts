import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstProgramInNailsComponent } from "./first-program-in-nails/first-program-in-nails.component";
import { FirstProgramComponent } from './first-program/first-program.component'
import { CursosModule } from './cursos/cursos.module';


@NgModule({
  declarations: [
    AppComponent,
    FirstProgramInNailsComponent,
    FirstProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
