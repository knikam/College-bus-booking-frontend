import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouteService } from '../_services/route/route.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  routeForm : FormGroup
  stop:string[] = []
  
  constructor(private service:RouteService) { }

  ngOnInit(): void {
    this.routeForm = new FormGroup({
      driverName : new FormControl,
      source : new FormControl,
      destination : new FormControl,
      price : new FormControl,
      stops : new FormControl


    })
  }

  addRoute(){
    let route ={
      "driverName":this.routeForm.get('driverName')?.value,
      "source":this.routeForm.get('source')?.value,
      "destination":this.routeForm.get('destination')?.value,
      "price":this.routeForm.get('price')?.value,
      "stops":this.stop
    }

    this.service.addRoute(route)
    .subscribe(data=>{
      if(data){
        alert("Route Added.")
      }
    },error=>{
      alert("Fail to add route")
    })
  }

  addStop(){
    this.stop.push(this.routeForm.get('stops')?.value);
    this.routeForm.get('stops')?.reset()
    console.log(this.stop)
  }
}
