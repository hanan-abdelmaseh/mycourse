import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { SubjectsComponent } from './subjects/subjects.component';
import { ExpertsComponent } from './experts/experts.component';
import { NextStepComponent } from './next-step/next-step.component';
import { FooterComponent } from './footer/footer.component';
import { Courseitem1Component } from './courseitem1/courseitem1.component';
import { Courseitem2Component } from './courseitem2/courseitem2.component';
import { LearnerComponent } from './learner/learner.component';
import { FeatureComponent } from './feature/feature.component';
import { NewSkillsComponent } from './new-skills/new-skills.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    ContactComponent,
    SubjectsComponent,
    ExpertsComponent,
    NextStepComponent,
    FooterComponent,
    Courseitem1Component,
    Courseitem2Component,
    LearnerComponent,
    FeatureComponent,
    NewSkillsComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
