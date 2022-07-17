import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  public verifyUsernameOrEmail(filter){
    let params = new HttpParams();
    if(filter){
      if(filter.username){
        params = params.append('username', filter.username);
      }
      if(filter.email){
        params = params.append('email', filter.email);
      }
    }

    return this.http.get('http://localhost:3000/public/user/availability',{params})
  }
}
