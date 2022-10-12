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
    'id':""
  }]
  viPostPlan = [{
    'plan_price': '',
    'plan_talktime':'',
    'plan_data':'',
    'plan_validity':'',
    'id':""
  }]
  constructor() { 
    try
    {
      (async () => {
        this.viPlan = (await axios.get("http://localhost:8000/plan?best=3")).data
        
      })();
      (async () => {
        this.viPostPlan = (await axios.get("http://localhost:8000/postplan?best=3")).data
        
      })()
      
    }catch(e)
    {
      console.log(e);
    }
  }

  recharge = async (planObject:any) => {
    if(window.sessionStorage['id'] == 'undefined' || window.sessionStorage['id'] == undefined)
    {
      window.location.href="login?error=Please login to recharge or pay bills";
    }else{
      let newRecharge = new FormData()
      newRecharge.append('id',window.sessionStorage['id'])
      newRecharge.append('pid',planObject.id)
      const resp = (await axios.post("http://localhost:8000/recharge",newRecharge)).data
      if(resp=="connection/bank?plan=True"){
        console.log(planObject.price)
        window.sessionStorage['price']=planObject.price;
      }

      window.location.href=resp;
    }
  }

  ngOnInit(): void {
  }



}
