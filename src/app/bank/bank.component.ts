import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  price: string="";
  constructor() {
    this.price=window.sessionStorage['price'];
   }

  ngOnInit(): void {
  }

  invoice = () => {return window.location.href="connection/successful"}

}
