import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../_model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = "http://localhost:1001";

  constructor(private http:HttpClient) { }

  addUser(user:User){
    return this.http.post(this.BASE_URL+"/addUser",user, {  responseType: 'text' as 'json' });
  }

  login(user:any){
    return this.http.post(this.BASE_URL+"/authenticate",user);
  }

  getByUserType(type:string){
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer '+localStorage.getItem("token"))
    .set('Content-Type', 'application/json')
    
   return this.http.get(this.BASE_URL+"/getUserByType?type="+type,{headers});
  }

}
