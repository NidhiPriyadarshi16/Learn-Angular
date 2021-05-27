import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseListService } from '../Services/course-list.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean=false;
  registeruser=new FormGroup({
    
      
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')

    })
  register: any;
  
  

  constructor(private reg:CourseListService) { }


  ngOnInit(): void {
  }

  reguser(){
     console.log(this.registeruser.value);
     this.register.registeruser(this.registeruser.value).subscribe((result: any)=>{
       console.log(result,"data created successfully")
     })
}

}

