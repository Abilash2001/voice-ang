import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import * as FormData from 'form-data';


@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {
  
  pincode: string="";
  phoneNo: string="";
  state: string="";
  district: string="";
  address: string="";
  success:string="";
  error:string="";
  genPhone:string= "";

  constructor(router: ActivatedRoute) { 
    router.queryParams.subscribe((params) => {
      this.error=params['error'];
      this.success=params['success'];
    })
  }
  generateNo = () => {
    let connection = new FormData()
    connection.append('pincode',this.pincode);
    connection.append('phoneno',this.phoneNo);
    connection.append('state',this.state);
    connection.append('address',this.address);
    (async () => {
      const resp =(await axios.post("http://localhost:8000/connection",connection)).data;
      if(resp.location != "connection"){
        window.location.href=resp.location;
      }else{
        window.sessionStorage['genPhone'] = resp.phone;
        window.sessionStorage['price']='100';
        window.location.href= "connection/bank"
      }
    })()
  }
  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html'
})
export class SuccessfulComponent implements OnInit {
  booked: boolean=false;
  phoneNo: string="";
  constructor(){
    this.phoneNo = window.sessionStorage['genPhone'];
    if(this.phoneNo != 'undefined'){
      this.booked=true;
    }
  }
  ngOnInit(): void {
      
  }
}