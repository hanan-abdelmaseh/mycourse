import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private router:Router) { }
  // tslint:disable-next-line: typedef
  loginClick(){
    this.router.navigateByUrl('/login');
  }
  signIn(){
    this.router.navigateByUrl('/join');
  }
  ngOnInit(): void {
  }

}
