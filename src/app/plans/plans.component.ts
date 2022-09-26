import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  viPlan = [{
    'plan_price': '',
    'plan_talktime':'',
    'plan_data':'',
    'plan_validity':'',
  }]
  constructor() { 
    try
    {
      (async () => {
        this.viPlan = (await axios.get("http://localhost:8000/plan?best=3")).data
        
      })()
    }catch(e)
    {
      console.log(e)
    }
  }

  ngOnInit(): void {
  }



}
