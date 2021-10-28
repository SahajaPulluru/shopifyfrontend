import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponce, LoginUser, User } from 'src/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(data:User){
    return this.http.post(`https://backendshopify.herokuapp.com/user/register`,data)
  }

  loginUser(data:LoginUser){
    return this.http.post<LoginResponce>(`https://backendshopify.herokuapp.com/user/login`,data)
  }
}
