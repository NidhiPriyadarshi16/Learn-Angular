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
  email="prince@angular.com"
  imageUrl="https://static.toiimg.com/thumb/msid-77565070,width-1200,height-900,resizemode-4/.jpg";
  text="A cryptocurrency, crypto-currency, or crypto is a digital asset designed to work as a medium of exchange wherein individual coin ownership records are stored in a ledger existing in a form of a computerized "
  onSave($event: any){
    console.log('Saved',$event);
  }

  onKeyUp(){
    console.log(this.email);
  }

}
