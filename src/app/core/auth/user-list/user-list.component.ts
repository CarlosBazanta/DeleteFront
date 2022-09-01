import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageSize= 5;
  user:User[];
  page: number = 1;
  pageName: String = 'Home';

  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.changeLoad()
    setTimeout(()=>{this.load=true;},5000)
    this.getUser();
  }

  editUser(id:number){
    this.router.navigate(['editUser',id]);
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(dato=>{
      console.log(dato);
      this.getUser();
    })
  }

  private getUser(){
    this.userService.getList().subscribe(dato =>{
      this.user = dato;
    })
  }

  public load: boolean = false;
  public loading: string = 'Cargando.';


  changeLoad(){

      setInterval(()=>{this.loading += '.';
      if(this.loading==='Cargando....')
      {this.loading='Cargando.';}},600)

  }


}
