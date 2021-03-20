import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  namePattern = '^[a-z]';

  signUpForm: FormGroup;
  constructor(private fb: FormBuilder  ) {
         this.signUpForm = this.fb.group({
           firstName: ['', Validators.required],
           lastName : ['' ,  Validators.required],
           email: ['', [Validators.email, Validators.required, Validators.pattern(this.emailPattern)]],
           password: ['', Validators.required]
         });
  }

  ngOnInit(): void {
  }
   // tslint:disable-next-line: typedef
   get firstName(){
     return this.signUpForm.get('firstName');
   }
   // tslint:disable-next-line: typedef
   get lastName(){
    return this.signUpForm.get('lastName');
  }
  // tslint:disable-next-line: typedef
  get email(){
    return this.signUpForm.get('email');
  }
  // tslint:disable-next-line: typedef
  get passowrd(){
    return this.signUpForm.get('password');
  }
}
