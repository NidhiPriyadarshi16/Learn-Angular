import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }
  loginUser(){
    if(this.email== "nidhi@gmail.com"&& this.password== "Nidhi"){
      alert("welcome")
    }
    else{
      alert("please check your credentials")
}
}
}
