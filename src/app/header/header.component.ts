import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authenticate:boolean = false;
  checkPre: boolean = true;
  checkPost: boolean = true;
  constructor() { 
    if( window.sessionStorage['id'] != 'undefined' && window.sessionStorage['id']!=undefined){
      this.authenticate=true
      const userCategory = window.sessionStorage['cat']
      if(userCategory=='p'){ this.checkPost=false;this.checkPre=true;}
      else if(userCategory=='P'){this.checkPre=false;this.checkPost=true;}
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
