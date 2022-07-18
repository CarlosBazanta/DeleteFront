import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user:User[]

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(){
    this.userService.getList().subscribe(dato =>{
      this.user = dato;
    })
  }

}
