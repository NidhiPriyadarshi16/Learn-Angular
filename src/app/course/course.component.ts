import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {

  constructor() { }
   courses =["Angular", "React" ,"javascript", "python", "java core", "java advance"];

}
