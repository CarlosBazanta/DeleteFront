import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterServiceComponent } from './service/register-service/register-service.component';
import { UserListComponent } from './table/user-list/user-list.component';

const routes: Routes = [
  {path: 'home',component:UserListComponent},
  {path: 'register', component:RegisterServiceComponent},
  {path: '',redirectTo: 'home',pathMatch:'full'},
  {path: '**',redirectTo: 'home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
