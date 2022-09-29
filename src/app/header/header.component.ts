import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authenticate:boolean = false;
  constructor() { 
    if( window.sessionStorage['id'] != 'undefined' && window.sessionStorage['id']!=undefined){
      this.authenticate=true
    }
  }

  ngOnInit(): void {
  }

  Logout = () => {
    window.sessionStorage.removeItem('id');
    this.authenticate=false;
    window.location.href="login"
}
}
