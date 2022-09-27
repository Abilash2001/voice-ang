import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import * as FormData from 'form-data';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  name:string=""
  error:string="";
  Email:string="";
  Feedback:string="";
  star:string="";
  success:string=""
  constructor(router: ActivatedRoute) {
   router.queryParams.subscribe((params) => {return this.error = params['error']})
   router.queryParams.subscribe((params) => {return this.success = params['success']})
  }

  ngOnInit(): void {
  }
  addFeedback = async () => {
    try
    {
        let newForm = new FormData()
        newForm.append('Email',this.Email)
        newForm.append('Feedback',this.Feedback)
        newForm.append("Name",this.name)
        newForm.append('Star',this.star)
        const resp = await axios.post("http://localhost:8000/feedback",newForm)
        window.location=resp.data;
    }catch(e)
    {
      console.log(e)
    }
  }
}
@Component({
  selector: 'app-fetchfb',
  templateUrl: './fetchfb.component.html',
})
export class FetchfbComponent{
  viFB=[
    {
      'Email':'',
      'Feedback':'',
    }
  ]
  constructor(){
    (async () => {
      try {
        this.viFB = (await axios.get("http://localhost:8000/Fetchfeedback")).data
      } catch (error) {
        console.log(error)
      }
    })()
  }
}
