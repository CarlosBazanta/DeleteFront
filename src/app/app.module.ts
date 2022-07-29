import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './core/auth/user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterServiceComponent } from './core/auth/register-service/register-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './core/auth/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RegisterServiceComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
