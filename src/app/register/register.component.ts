import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error:string="";
  name:string="";
  email:string="";
  phone:string="";
  password:string="";

  constructor(router: ActivatedRoute) { 
    router.queryParams.subscribe((params) => {return this.error = params['error']})
  }

  ngOnInit(): void {
  }
  addNewUser = async () => {
    try
    {
        await axios.post("http://localhost:8000/sign",{params: {
        name: this.name,
        email:this.email,
        password:this.password
      }})
    }catch(e)
    {
      console.log(e)
    }
  }
}
