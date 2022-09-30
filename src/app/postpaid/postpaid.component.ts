import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostpaidComponent implements OnInit {
 viPlans = [{
    'plan_price':"",
    'plan_talktime':"",
    'plan_data':"",
    'id':''
  }]

  constructor() {
  (async () => {
        try {
          this.viPlans = (await axios.get("http://localhost:8000/postplan")).data
          console.log(this.viPlans)
        } catch (error) {
          console.log(error)
        }
    })()
}

  ngOnInit(): void {
  }

}
