import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token") == null){
        this.router.navigate(['user-login']);
    }
    if(localStorage.getItem('role') == "Admin"){
      console.log(localStorage.getItem('role'))
      this.isAdmin = true;
    }
  }

  logout(){
    localStorage.clear()
    location.reload()
  }

}
