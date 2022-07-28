import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.css']
})
export class RegisterServiceComponent implements OnInit {

  registerUserFormGroup: FormGroup;
  user: User = new User();

  constructor(private formBuilder: FormBuilder,private router:Router,
    private userService : UserServiceService ) { }

  ngOnInit(): void {

    this.registerUserFormGroup=this.createFormGroup();

  }

  createFormGroup(){
    return this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15)]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100)]),
    })
  }

  saveUser(){
    this.userService.userRegister(this.user).subscribe(dato => {
      console.log(dato);
      this.redictToList();
    }, error => console.log(error));
  }

  onSubmit():void{
    console.log(this.registerUserFormGroup.value)
    this.saveUser();
  }

  redictToList(){
    this.router.navigate(['/home'])
  }


}
