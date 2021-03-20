import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'courses' , component: CoursesComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'contact' , component: ContactComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'join' , component: SignupComponent},
  {path: '**', redirectTo: 'home'},
  {  path: '', pathMatch: 'prefix', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
