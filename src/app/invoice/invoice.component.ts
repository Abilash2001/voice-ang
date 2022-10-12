import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  sim:boolean=false;
  plan: boolean=false;
  dongle:boolean=false;
  price: string= "";
  beforeTax: number=0;
  constructor(router: ActivatedRoute) {
    router.queryParams.subscribe((params) => {
      if(params['sim']){
        this.sim=true;
      }
      if(params['plan']){
        this.plan=true;
        this.price=window.sessionStorage['price'];
        if(Number(this.price)<10){
          this.beforeTax=0;
        }else{
          this.beforeTax=Number(this.price)-10;
        }
      }
      if(params['dongle']){
        this.dongle=true;
        this.price=window.sessionStorage['price'];
        if(Number(this.price)<10){
          this.beforeTax=0;
        }else{
          this.beforeTax=Number(this.price)-10;
        }
        }
    })
  }

  ngOnInit(): void {
  }

}
