import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from '../_services/route/route.service';
import { ShareServiceService } from '../_services/share-service.service';

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css']
})
export class BusDetailComponent implements OnInit {

  routes:any

  constructor(private service : RouteService, private router : Router,private share:ShareServiceService) { }

  ngOnInit(): void {
    this.getRoutes()
  }

  getRoutes(){
    this.service.getRoute()
    .subscribe(data=>{
      if(data){
        this.routes = data
      }
    },error=>{
      if(error.status == 404){
        alert("No route available")
      }
    })
  }

  showRoute(route:any){
   this.share.sharingValue = route;
   this.router.navigate(['route-detail'])
  }

}
