import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id:number;
  user:User= new User();
  editFormGroup: FormGroup;

  constructor(private userService: UserServiceService , private router: Router,
              private route: ActivatedRoute, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

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

  redictToList(){
    this.router.navigate(['/home'])
  }

  onSubmit(){
    this.userService.editUser(this.id,this.user).subscribe(dato => {
      this.redictToList();
    },error => console.log(error));
  }

}
