import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { JavaComponent } from './java/java.component';
import { CComponent } from './c/c.component';
import { PythonComponent } from './python/python.component';
import { EachCursesComponent } from './each-curses/each-curses.component';
import { EachCursesService } from './each-curses/each-curses.service';



@NgModule({
  declarations: [CursosComponent, JavaComponent, CComponent, PythonComponent, EachCursesComponent],
  imports: [
    CommonModule
  ],
  exports : [CursosComponent],
  providers : [EachCursesService]
})
export class CursosModule { }
