import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../_services/user/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userlogin = true;
  userregister = false;

  loginForm:FormGroup;
  submitted: boolean = false;
  authRequest: any;
  response: any;

  //Register
  registerForm: FormGroup;

  constructor(private service:UserService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name : new FormControl,
      email : new FormControl,
      dateOfBirth : new FormControl,
      gender : new FormControl,
      userType: new FormControl,
      password : new FormControl,
      mobileNo : new FormControl
    })

    this.loginForm = new FormGroup({
      userName : new FormControl,
      userPassword : new FormControl
    })
  }

  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login()
  {
    this.userlogin = true;
    this.userregister = false;
  }

  addCustomer(){
    console.log(this.registerForm.value)
    this.service.addUser(JSON.parse(JSON.stringify(this.registerForm.value)))
    .subscribe(data=>{
      if(data){
        alert("User Added.")
        location.reload()
      }
    },error=>{
      alert("Fail to add user");
    })
  }

  login(){
    this.service.login(this.loginForm.value)
    .subscribe(data=>{
      if(data){
        let resData = JSON.parse(JSON.stringify(data))
        console.log(resData.jwtToken);
        localStorage.setItem("token",resData.jwtToken);
        localStorage.setItem("role",resData.user.userType);
  
        this.router.navigate(['user-home']);  
      }
    },error=>{
      alert("Check Username password");
    })
  }

}
