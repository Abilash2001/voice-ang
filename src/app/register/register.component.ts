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
  constructor(router: ActivatedRoute) { 

    router.queryParams.subscribe((params) => {return this.error = params['error']})
    if(window.sessionStorage['genPhone']!='undefined'){
      this.phone=window.sessionStorage['genPhone']
    }
  }

  ngOnInit(): void {
  }

  addNewUser = async () => {
    try
    {
        let newForm = new FormData()
        newForm.append('name',this.name);
        newForm.append('email',this.email);
        newForm.append('phone',this.phone);
        newForm.append('password',this.password);
        newForm.append('usercat',window.sessionStorage['cat']);
        const resp = (await axios.post("http://localhost:8000/sign",newForm)).data
        if(resp.authenticate == true){
            window.sessionStorage["id"]=resp.id
            window.sessionStorage.removeItem('genPhone')
        }
        window.location=resp.location;
    }catch(e)
    {
      console.log(e)
    }
  }
}
