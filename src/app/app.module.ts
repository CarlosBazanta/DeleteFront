import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './table/user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterServiceComponent } from './service/register-service/register-service.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './service/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RegisterServiceComponent,
    EditUserComponent
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
