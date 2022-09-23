import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import * as FormData from 'form-data';
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
  csrf:any;
  constructor(router: ActivatedRoute) { 

    router.queryParams.subscribe((params) => {return this.error = params['error']})
  }

  ngOnInit(): void {
  }

  addNewUser = async () => {
    const data = {name: this.name, email: this.email,phone: this.phone ,password: this.password}
    try
    {
        let newForm = new FormData()
        newForm.append('name',this.name)
        newForm.append('email',this.email)
        newForm.append('phone',this.phone)
        newForm.append('password',this.password)
        
        const resp = await axios.post("http://localhost:8000/sign",newForm)
        window.location=resp.data;

        
    }catch(e)
    {
      console.log(e)
    }
  }
}
