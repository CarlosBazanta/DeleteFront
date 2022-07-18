import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.css']
})
export class RegisterServiceComponent implements OnInit {

  user: User = new User();

  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {

  }

  saveUser(){
    this.userService.userRegister(this.user).subscribe(dato => {
      console.log(dato);
      this.redictToList();
    }, error => console.log(error));
  }

  redictToList(){
    this.router.navigate(['/home'])
  }

  onSubmit():void{
    console.log(this.user)
  }

}
