import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user/user.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  student:any
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.getStudent()
  }

  getStudent(){
    this.service.getByUserType("Student")
    .subscribe(data=>{
      if(data){
        this.student = data;
      }
    },error=>{
      if(error.status == 404){
        alert("No data found")
      }
    })
  }

}
