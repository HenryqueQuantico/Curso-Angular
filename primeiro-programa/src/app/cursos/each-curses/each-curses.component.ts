import { Component, OnInit } from '@angular/core';
import { EachCursesService } from './each-curses.service';

@Component({
  selector: 'app-each-curses',
  templateUrl: './each-curses.component.html',
  styleUrls: ['./each-curses.component.css']
})
export class EachCursesComponent implements OnInit {

  public nome : string;
  public sobrenome : string;
  public cursos : string[];

  constructor() {

    this.nome = "Henryque";
    this.sobrenome = "Ramos Santana";
    let cursos = new EachCursesService();
    this.cursos = cursos.getCurses();

  }

  ngOnInit(): void {
  }

}
