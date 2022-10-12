import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  text:string="Recharge"
  preCheck:boolean =true;
  postCheck:boolean=false;
  phone:string="";
  prepaid = ()=> {this.preCheck=true;this.postCheck=false}
  postpaid = ()=> {this.postCheck=true;this.preCheck=false}

  rechargePrepaid = async () => {
    const resp = (await axios.get("http://localhost:8000/getphone?phone="+this.phone)).data;
    window.sessionStorage['id']=resp.id;
    window.location.href= resp.location;
  }
}
