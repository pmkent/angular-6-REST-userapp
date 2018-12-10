import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/security/login/login.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { ListUserComponent } from './pages/user/list-user/list-user.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { RegistrationComponent } from './pages/security/registration/registration.component';

import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuardService] },
  { path: 'list-user', component: ListUserComponent, canActivate: [AuthGuardService] },
  { path: 'edit-user', component: EditUserComponent, canActivate: [AuthGuardService] },
  { path: '', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuardService ]
})
export class AppRoutingModule { }
