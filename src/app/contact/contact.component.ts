
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  massage = '';
  name = '';
  email = '';
  subject = '';
  constructor() { }

  ngOnInit(): void {
  }


}
