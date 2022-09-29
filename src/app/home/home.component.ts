import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setTypePrepaid = () => { 
    window.sessionStorage['cat']='p';
    window.location.href="connection";
   }
  setTypePostpaid = () => {
    window.sessionStorage['cat']='P';
    window.location.href="connection";
  }
  
}
