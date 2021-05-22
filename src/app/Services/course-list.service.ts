import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  constructor() { }

  getcourselist(){
    return ["Angular", "React" ,"javascript", "python", "java core", "java advance"];
  }
}
