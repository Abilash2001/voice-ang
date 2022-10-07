import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as FormData from 'form-data';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
mobile_no:string=""
  Email:string="";
  Query:string="";
  a:string="";

  constructor(router: ActivatedRoute) { }

  ngOnInit(): void {
  }
  addQuery = async () => {
    try
    {
        let newForm = new FormData()
        newForm.append('Email',this.Email)
        newForm.append('Query',this.Query)
        newForm.append("mobile_no",this.mobile_no)
        newForm.append('a',this.a)
        const resp = await axios.post("http://localhost:8000/queries",newForm)
        window.location=resp.data;
    }catch(e)
    {
      console.log(e)
    }
  }
}


@Component({
  selector: 'app-fetchquery',
  templateUrl: './fetchquery.component.html',
})
export class FetchqueryComponent{
  viQ=[
    {
      'mobile_no':'',
      'Email':'',
      'Query':'',
    }
  ]
  constructor(){
    (async () => {
      try {
        this.viQ = (await axios.get("http://localhost:8000/fetchquery")).data
      } catch (error) {
        console.log(error)
      }
    })()
  }
}
