import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { Constanst } from '../../constanst/constanst.component';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.css']
})
export class RegisterServiceComponent implements OnInit {

  registerUserFormGroup: FormGroup;
  user: User = new User();
  loading: string = 'Registrar';

  constructor(private formBuilder: FormBuilder,private router:Router,
    private userService : UserServiceService ) { }

  ngOnInit(): void {

    this.registerUserFormGroup= this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25)]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
        Validators.pattern(Constanst.Pattern.Form.email)]),
    });

  }

  submitted = false;

  get name() {return this.registerUserFormGroup.get('name')}
  get lastName() {return this.registerUserFormGroup.get('lastName')}
  get email() {return this.registerUserFormGroup.get('email')}

  saveUser(){
    this.userService.userRegister(this.user).subscribe(dato => {
      console.log(dato);
      this.redictToList();
    }, error => console.log(error));


  }

  onSubmit():void{

    this.submitted =true;

    if(this.registerUserFormGroup.invalid){
      return console.log("error");
    }

    console.log(this.registerUserFormGroup.value)
    this.saveUser();
  }

  redictToList(){
    this.router.navigate(['/home'])
  }

  loadingCard(){

    this.loading ='Cargando...' ;

  }


}
