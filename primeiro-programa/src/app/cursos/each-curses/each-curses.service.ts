import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EachCursesService {

  constructor() { }

  getCurses(){
    return ["C", "Java", "Python"];
  }
}
