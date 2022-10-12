import { AfterViewInit, Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,AfterViewInit {
authenticate:boolean = false;
dataBalance:number = Number(Math.random().toPrecision(2))
viPlan = [{
  'plan_price': '',
  'plan_talktime':'',
  'plan_data':'',
  'plan_validity':'',
  'id':""
}]
viHistoryPlan = [{
  'plan_price': '',
  'plan_talktime':'',
  'plan_data':'',
  'plan_validity':'',
  'id':""
}]
profile={
  "name":"",
  "id":""
}
query:any;
  constructor() {
    if( window.sessionStorage['id'] != 'undefined' && window.sessionStorage['id']!=undefined){
      this.authenticate=true;
      try{
        (async () => {
          this.profile = (await axios.get("http://localhost:8000/fetchName?id="+window.sessionStorage['id'])).data[0]
          try{
            (async () => {
              this.viHistoryPlan = (await axios.get("http://localhost:8000/fetchHistoryPlan?id="+this.profile.id)).data
              return this.viHistoryPlan.reverse();
            })();
            try{
              (async () => {
                this.query= (await axios.get("http://localhost:8000/getquery?fetchQuery=True&id="+this.profile.id)).data
                for(let i of this.query)
                {
                  switch (i.a) {
                    case "1":i.a="Network Issue";break;
                    case "2":i.a="Call Issue";break;
                    case "3":i.a="Recharge Issue";break;
                    case "4":i.a="MNP Issue";break;
                    case "5":i.a="Otherr Issue";break;
                    default:i.a="Unknown Issue";break;
                  }
                }
              })()
            }catch(e){
              console.log(e);
            }
          }catch(e){
            console.log(e);
          }
        })();
      }catch(e){
        console.log(e);
      }
      
      try{
        (async () => {
          this.viPlan = (await axios.get("http://localhost:8000/plan?best=2")).data
        })();
      }catch(e){
        console.log(e);
      }
    }else{
      window.location.href="login?error=You need to login first"
    }
  }

  recharge = async (planObject:any) => {
    if(window.sessionStorage['id'] == 'undefined' || window.sessionStorage['id'] == undefined)
    {
      window.location.href="login?error=Please login to recharge or pay bills";
    }else{
      let newRecharge = new FormData()
      newRecharge.append('id',window.sessionStorage['id'])
      newRecharge.append('pid',planObject.id)
      const resp = (await axios.post("http://localhost:8000/recharge",newRecharge)).data
      if(resp=="connection/bank?plan=True"){
        console.log(planObject.price)
        window.sessionStorage['price']=planObject.price;
      }

      window.location.href=resp;
    }
  }

  ngOnInit(): void {
  }
  Logout = () => {
    window.sessionStorage.removeItem('id');
    this.authenticate=false;
    window.location.href="login"
   }
   userDataCanva:any;
   userDataChart:any;
   ngAfterViewInit(): void {
    renderUserDataChart(this.userDataCanva,this.userDataChart);
   }
}

function renderUserDataChart(userDataCanva:any,userDataChart:any)
{
  userDataCanva = document.getElementById('userData');
  userDataChart = userDataCanva.getContext('2d');
  let resp:string[] = []
  for(let i:number=0;i<7;i++){
    resp.push(Math.random().toPrecision(2))
  }
  new Chart(userDataChart,{
    type: 'line',
    data: {
      labels:["Monday(GB)","Tuesday(GB)","Wednesday(GB)","Thursday(GB)","Friday(GB)","Saturday(GB)","Sunday(GB)"],
      datasets: [{
          label: 'User Data Usage',
          data:resp,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(229, 123, 234, 0.2)',
              'rgba(10, 262, 235, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 3
      }]
  }
  })
}