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
  error:string="";
  Email:string="";
  Feedback:string="";
  csrf:any;
  constructor(router: ActivatedRoute) {
   router.queryParams.subscribe((params) => {return this.error = params['error']})
  }

  ngOnInit(): void {
  }
addFeedback = async () => {
    try
    {
        let newForm = new FormData()
        newForm.append('Email',this.Email)
        newForm.append('Feedback',this.Feedback)
        const resp = await axios.post("http://localhost:8000/feedback",newForm)
        window.location=resp.data;
    }catch(e)
    {
      console.log(e)
    }
  }
}
