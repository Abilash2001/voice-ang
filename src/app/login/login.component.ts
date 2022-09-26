import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import * as FormData from 'form-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(router: ActivatedRoute) {
    router.queryParams.subscribe((params) => {return this.error=params['error']})
   }

  ngOnInit(): void {
  }

  phone:string="";
  password:string="";
  error:string="";

  checkUser = async () => {
    let User  = new FormData()
    User.append('phone',this.phone)
    User.append('password',this.password)
    const resp = (await axios.post('http://localhost:8000/login',User)).data
    if(resp.authenticate == true){
      window.sessionStorage["id"]=resp.id
    }
    window.location=resp.location;
  }

}
