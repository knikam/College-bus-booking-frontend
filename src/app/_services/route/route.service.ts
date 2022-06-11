import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from 'src/app/_model/route.model';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private BASE_URL ="http://localhost:1001";

  constructor(private http : HttpClient) { }

  
  addRoute(route:Route){

    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer '+localStorage.getItem("token"))
    .set('Content-Type', 'application/json')
    
    return this.http.post(this.BASE_URL+'/addRoute',route,{headers,responseType: 'text' as 'json' },);
  }

  getRoute(){
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer '+localStorage.getItem("token"))
    .set('Content-Type', 'application/json')

    return this.http.get(this.BASE_URL+'/getRoute',{headers});
  }

  getRouteById(id:number){
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer '+localStorage.getItem("token"))
    .set('Content-Type', 'application/json')

    return this.http.get(this.BASE_URL+"/getRouteById?id="+id,{headers})
  }
}
