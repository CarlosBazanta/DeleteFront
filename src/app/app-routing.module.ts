import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './service/edit-user/edit-user.component';
import { RegisterServiceComponent } from './service/register-service/register-service.component';
import { UserListComponent } from './table/user-list/user-list.component';

const routes: Routes = [
  {path: 'home',component:UserListComponent},
  {path: 'register', component:RegisterServiceComponent},
  {path: 'editUser/:id', component:EditUserComponent},
  {path: '',redirectTo: 'home',pathMatch:'full'},
  {path: '**',redirectTo: 'home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
