import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseURL = "http://localhost:8080/api/v1/work"

  constructor(private httpClient : HttpClient) { }

  getList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  userRegister(user:User) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,user)
  }

  deleteUser(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  editUser(id:number, user:User) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,user);
  }

  getId(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
}
