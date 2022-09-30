import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  success: string="";
  error: string="";
  constructor(router: ActivatedRoute) {
    router.queryParams.subscribe((params) => {
      this.success = params['success'];
      this.error = params['error'];
    })
   }

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
