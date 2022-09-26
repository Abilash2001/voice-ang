import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  viPlans = [{
    'plan_price':"",
    'plan_talktime':"",
    'plan_data':"",
    'plan_validity':"",
    'id':''
  }]
  constructor() { 
    (async () => {
        try {
          this.viPlans = (await axios.get("http://localhost:8000/plan")).data
          console.log(this.viPlans)
        } catch (error) {
          console.log(error)
        }
    })() 
  }

  ngOnInit(): void {
  }

}
