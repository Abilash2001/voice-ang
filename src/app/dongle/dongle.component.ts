import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dongle',
  templateUrl: './dongle.component.html',
  styleUrls: ['./dongle.component.css']
})
export class DongleComponent implements OnInit {
 DAllPack= [{
    'plan_price':'',
    'plan_data':'',
    'plan_validity':'',
    'id':'',
    'plan_usage':''
  }]
  error: string="";
  success: string="";
  constructor(router: ActivatedRoute) {

    router.queryParams.subscribe((params) => {
      this.error=params['error'];
      this.success=params['success'];
    });
    (async () => {
      this.DAllPack = (await axios.get('http://localhost:8000/dongle?all=True')).data
    })() }
    recharge = async (planObject:any) => {
      if(window.sessionStorage['id'] == 'undefined' || window.sessionStorage['id'] == undefined)
      {
        window.location.href="login?error=Please login to recharge or pay bills";
      }else{
        let newRecharge = new FormData()
        newRecharge.append('id',window.sessionStorage['id'])
        newRecharge.append('pid',planObject.id)
        const resp = (await axios.post("http://localhost:8000/recharge",newRecharge)).data
        if(resp=="connection/bank?dongle=True"){
          console.log(planObject.price)
          window.sessionStorage['price']=planObject.price;
          window.sessionStorage['cat']='d';
        }
  
        window.location.href=resp;
      }
    }
  ngOnInit(): void {
  }

}
