import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user/user.service';

@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.css']
})
export class ViewFacultyComponent implements OnInit {

  faculty : any
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.getFaculty()
  }

  getFaculty(){
    this.service.getByUserType("Faculty")
    .subscribe(data=>{
      if(data){
        this.faculty = data;
      }
    },error=>{
      if(error.status == 404){
        alert("No data Found")
      }
    })
  }

}
