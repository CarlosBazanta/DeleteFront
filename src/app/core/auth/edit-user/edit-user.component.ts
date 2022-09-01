import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { Constanst } from '../../constanst/constanst.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id:number;
  user:User= new User();
  editFormGroup: FormGroup;
  loading: string = 'Actualizar';
  Loading: string = 'Cargando';
  load: Boolean= false;

  constructor(private userService: UserServiceService , private router: Router,
              private route: ActivatedRoute, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.changeLoad();
    setTimeout(()=>{this.load=true;},2000);

    this.editFormGroup=this.createFormGroup();

    this.id = this.route.snapshot.params['id'];
    this.userService.getId(this.id).subscribe(dato =>{
      this.user = dato;
    },error => console.log(error));

  }

  createFormGroup(){
    return this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.pattern(Constanst.Pattern.Form.name)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
        Validators.pattern(Constanst.Pattern.Form.name)]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
        Validators.pattern(Constanst.Pattern.Form.email)]),
    })
  }

  get name() {return this.editFormGroup.get('name')}
  get lastName() {return this.editFormGroup.get('lastName')}
  get email() {return this.editFormGroup.get('email')}

  redictToList(){
    this.router.navigate(['/home'])
  }

  onSubmit(){

    if(this.editFormGroup.invalid){
      return console.log("error");
    }

    this.userService.editUser(this.id,this.user).subscribe(dato => {
      this.redictToList();
    },error => console.log(error));
  }

  loadingCard(){

    if(this.loading=='Cargando...'){

      this.loading ='Actualizar' ;

    }else{
      this.loading ='Cargando...' ;
    }

  }

  changeLoad(){
      setInterval(()=>{this.Loading += '.';
      if(this.Loading==='Cargando....')
      {this.Loading='Cargando.';}},500)
  }
}
