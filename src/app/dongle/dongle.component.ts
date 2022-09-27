import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-dongle',
  templateUrl: './dongle.component.html',
  styleUrls: ['./dongle.component.css']
})
export class DongleComponent implements OnInit {
 viPlans = [{
    'plan_price':"",
    'plan_data':"",
    'plan_validity':"",
    'id':''
  }]
  constructor() {
   (async () => {
        try {
          this.viPlans = (await axios.get("http://localhost:8000/dongle")).data
          console.log(this.viPlans)
        } catch (error) {
          console.log(error)
        }
    })() }

  ngOnInit(): void {
  }

}
