import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

// Components
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '',      component: LoginComponent },
    { path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
