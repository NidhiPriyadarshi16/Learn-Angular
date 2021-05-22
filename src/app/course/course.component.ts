import { CourseListService } from './../Services/course-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {

  constructor(private service:CourseListService) { 
    this.courses= this.service.getcourselist();
  }
  courses;

}
