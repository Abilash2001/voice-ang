import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
