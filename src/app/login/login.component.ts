import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;
 emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private fb: FormBuilder , private router: Router) {
     this.loginForm = this.fb.group({
       password : ['', Validators.required ],
       email : [ '' , [ Validators.email, Validators.required, Validators.pattern(this.emailPattern)] ]
     });
  }
/*loginForm = new FormGroup({
  email: new FormControl(),
  password: new FormControl()

})
*/
// tslint:disable-next-line: typedef
get password(){
  return this.loginForm.get('password');
}
// tslint:disable-next-line: typedef
get email(){
  return this.loginForm.get('email');
}
  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  login(){
    console.log(this.loginForm.value);
  }
  // tslint:disable-next-line: typedef
  create(){
     this.router.navigateByUrl('join');
  }


}
