import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  price: string="";
  locate: string="connection/successful"
  constructor(router: ActivatedRoute) {
    this.price=window.sessionStorage['price'];

    router.queryParams.subscribe((params) => {
      if(params['plan']){
        this.locate = "invoice?plan=True";
      }
      if(params['dongle']){
        this.locate = "invoice?dongle=True"
      }
    })
   }
  ngOnInit(): void {
  }

  invoice = () => {return window.location.href=this.locate}

}
