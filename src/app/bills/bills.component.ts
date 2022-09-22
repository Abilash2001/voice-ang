import { Component, OnInit } from '@angular/core';

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
  prepaid = ()=> {this.text = "Recharge";this.preCheck=true;this.postCheck=false}
  postpaid = ()=> {this.text = "Pay Bills";this.postCheck=true;this.preCheck=false}
}
