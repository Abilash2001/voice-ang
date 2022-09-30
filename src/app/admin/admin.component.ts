import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {
  success:string="";
  checked:boolean=false;
  constructor(router: ActivatedRoute) {
    let isAdmin:string="";
    router.queryParams.subscribe((params) => { return this.success=params['success']});
    if(window.sessionStorage['id']!='undefined')
    {
      (async () => {
           isAdmin = (await axios.get("http://localhost:8000/fetchAdmin?sid="+window.sessionStorage['id'])).data
           if(isAdmin=="home")
           {
             window.location.href="login?error=Login to access the site";
             window.sessionStorage['id']='undefined';
             this.checked=true;
           }
           else if(isAdmin=="checkadmin"){
             isAdmin = (await axios.get("http://localhost:8000/fetchAdmin?said="+window.sessionStorage['id'])).data;
             console.log(isAdmin)
             if(isAdmin == 'admin'){
              this.checked=true;
             }else{
               window.location.href="home"
             }
          }else if(isAdmin=="admin"){
             this.checked=true;
           }
     })()
  }else{
    window.location.href="home"
  }
  }

  ngOnInit(): void {
  }

  userChartCanvas:any;
  userChart:any;
  adminPhoneNo:string="";
  adminPassword:string="";
  review = [{
    'Name':'',
    'Email':'',
    'Feedback':''
  }]
  ngAfterViewInit()
  {
    renderUserCountChart(this.userChartCanvas,this.userChart);
  }
  addAccount = async () => {
    let adminAccount = new FormData();
    adminAccount.append('phoneNo',this.adminPhoneNo);
    adminAccount.append('password',this.adminPassword);
    const resp = (await axios.post("http://localhost:8000/newadmin",adminAccount)).data
    window.location=resp
  }
  getReview = async (value:number) => {
    return this.review = (await axios.get("http://localhost:8000/getReview?value="+value)).data;
  }

}

async function renderUserCountChart(userChartCanvas:any,userChart:any)
{
  userChartCanvas = document.getElementById('user')
  userChart = userChartCanvas.getContext('2d');
  const output = (await axios.get("http://localhost:8000/usersCount")).data
  let resp = output.toString().split("")
  new Chart(userChart,
    {
      type: 'bar',
      data: {
          labels: ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decembers'],
          datasets: [{
              label: 'No of Users',
              data: resp,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}
@Component({
  selector: 'app-adminpack',
  templateUrl: './adminpack.component.html',
})
export class AdminpackComponent{
  viBestPack=[
    {
      'plan_price':'',
      'plan_talktime':'',
      'plan_data':'',
      'plan_validity':'',
      'id':'',
      'plan_usage':'0'
    }
  ]
  constructor(){
    (async () => {
      try {
        this.viBestPack = (await axios.get("http://localhost:8000/plan?best=6")).data
      } catch (error) {
        console.log(error)
      }
    })()
  }
}

@Component({
  selector: 'app-adminuserCategory',
  templateUrl: './adminuserCategory.component.html',
})
export class AdminuserCategoryComponent implements AfterViewInit{
  userCategoryChartCanva:any;
  userCategoryChart:any;
  userChartCanvas:any;
  userChart:any;
  ngAfterViewInit(): void {
      renderUserCountChart(this.userChartCanvas,this.userChart);
      renderUserCategoryChart(this.userCategoryChartCanva,this.userCategoryChart);
      renderTIcketCategoryChart(this.userCategoryChartCanva,this.userCategoryChart);
      renderCustomerSatisfactory(this.userCategoryChartCanva,this.userCategoryChart);
  }
}

async function renderCustomerSatisfactory(userCategoryCanvaChart:any, userCategoryChart:any)
{
  userCategoryCanvaChart = document.getElementById('custSat');
  userCategoryChart = userCategoryCanvaChart.getContext('2d');
  let resp:string[]=[];
  const result = (await axios.get("http://localhost:8000/getReview?fetchCount=True")).data;
  resp = result.toString().split("")
  new Chart(userCategoryChart,{
    type: 'pie',
    data: {
      labels: ['1⭐','2⭐','3⭐','4⭐','5⭐'],
      datasets: [{
          label: 'Users Satisfaction',
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

function renderTIcketCategoryChart(userCategoryCanvaChart:any,userCategoryChart:any)
{
  userCategoryCanvaChart = document.getElementById('ticketCat');
  userCategoryChart = userCategoryCanvaChart.getContext('2d');
  new Chart(userCategoryChart,{
    type: 'pie',
    data: {
      labels: ['Website','Phone','Whatsapp','Email'],
      datasets: [{
          label: 'Users Types',
          data: [200,100,10],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
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

async function renderUserCategoryChart(userCategoryCanvaChart:any,userCategoryChart:any)
{
  userCategoryCanvaChart = document.getElementById('userCat');
  let resp:string[]=[]
  userCategoryChart = userCategoryCanvaChart.getContext('2d');
  try {
    const result:string = (await axios.get("http://localhost:8000/fetchCat")).data;
    resp = result.toString().split("")
  } catch (error) {
    console.log(error)
  }
  new Chart(userCategoryChart,{
    type: 'pie',
    data: {
      labels: ['Prepaid', 'Postpaid', 'Dongle'],
      datasets: [{
          label: 'Users Types',
          data: resp,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
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

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
})
export class AdminheaderComponent{
 logout = ()=>{window.sessionStorage['id']=undefined}
}

@Component({
  selector: 'app-viewpack',
  templateUrl: './viewpack.component.html',
})
export class ViewpackComponent{
  viAllPack= [{
    'plan_price':'',
    'plan_talktime':'',
    'plan_data':'',
    'plan_validity':'',
    'id':'',
    'plan_usage':''
  }]
  error: string="";
  success: string="";
  constructor(router: ActivatedRoute)
  {
    router.queryParams.subscribe((params) => {
      this.error=params['error'];
      this.success=params['success'];
    });
    (async () => {
      this.viAllPack = (await axios.get('http://localhost:8000/plan?all=True')).data
    })()
  }

 deleteThisPack = async (e:any) => {
    const resp = await axios.delete("http://localhost:8000/remplan?plan="+e)
    window.location=resp.data
  }
}

@Component({
  selector: 'app-newplan',
  templateUrl: './newplan.component.html',
})
export class NewplanComponent{
  newplan_price:string="";
  newplan_talktime:string="";
  newplan_data:string="";
  newplan_validity:string="";
  error:string="";
  constructor(router: ActivatedRoute){
    router.queryParams.subscribe((params) => {return this.error = params['error']})
  }
  newPlan = async () => {
    let newPlan = new FormData();
    newPlan.append('price',this.newplan_price);
    newPlan.append('talktime',this.newplan_talktime);
    newPlan.append('data',this.newplan_data);
    newPlan.append('validity',this.newplan_validity)
    const resp = (await axios.post("http://localhost:8000/addplan",newPlan));
    window.location=resp.data;
  }
}


@Component({
  selector: 'app-editplan',
  templateUrl: './editplan.component.html',
})
export class EditplanComponent{
  editPack ={
  id:"",
  plan_price:'',
  plan_talktime :"",
  plan_validity:"",
  plan_data:"",
}
  error:string="";
  id:string="";
  constructor(router: ActivatedRoute){
    router.queryParams.subscribe((params) => {return this.error = params['error']});
    router.queryParams.subscribe((params) => {return this.id = params['id']});
    (async () => {
      this.editPack=  (await axios.get('http://localhost:8000/fetchplan?id='+this.id)).data[0]
    } )()
  }
    editplan = async () => {
     let editPlan = new FormData();
     editPlan.append('price',this.editPack.plan_price);
     editPlan.append('talktime',this.editPack.plan_talktime);
     editPlan.append('data',this.editPack.plan_data);
     editPlan.append('validity',this.editPack.plan_validity)
     editPlan.append('id',this.editPack.id)
     const resp = (await axios.post("http://localhost:8000/editplan",editPlan));
     window.location=resp.data;
  }
}


@Component({
  selector: 'app-admindongle',
  templateUrl: './admindongle.component.html',
})
export class AdmindongleComponent{
  vidBestPack=[
    {
      'plan_price':'',
      'plan_data':'',
      'plan_validity':'',
      'id':'',
      'plan_usage':'0'
    }
  ]
  constructor(){
    (async () => {
      try {
        this.vidBestPack = (await axios.get("http://localhost:8000/dongle?best=6")).data
      } catch (error) {
        console.log(error)
      }
    })()
  }
}

@Component({
  selector: 'app-newdongleplan',
  templateUrl: './newdongleplan.component.html',
})
export class NewdongleplanComponent{
  newdplan_price:string="";
  newdplan_data:string="";
  newdplan_validity:string="";
  error:string="";
  constructor(router: ActivatedRoute){
    router.queryParams.subscribe((params) => {return this.error = params['error']})
  }
  newdPlan = async () => {
    let newdPlan = new FormData();
    newdPlan.append('price',this.newdplan_price);
    newdPlan.append('data',this.newdplan_data);
    newdPlan.append('validity',this.newdplan_validity)
    const resp = (await axios.post("http://localhost:8000/dongleplan",newdPlan));
    window.location=resp.data;
  }
}


@Component({
  selector: 'app-viewdonglepack',
  templateUrl: './viewdonglepack.component.html',
})
export class ViewdonglepackComponent{
  DAllPack= [{
    'plan_price':'',
    'plan_data':'',
    'plan_validity':'',
    'id':'',
    'plan_usage':''
  }]
  error: string="";
  success: string="";
  constructor(router: ActivatedRoute)
  {
    router.queryParams.subscribe((params) => {
      this.error=params['error'];
      this.success=params['success'];
    });
    (async () => {
      this.DAllPack = (await axios.get('http://localhost:8000/dongle?all=True')).data
    })()
  }

 deleteThisPack = async (e:any) => {
    const resp = await axios.delete("http://localhost:8000/delplan?plan="+e)
    window.location=resp.data
  }
}

@Component({
  selector: 'app-editdongle',
  templateUrl: './editdongle.component.html',
})
export class EditdongleComponent{
  editPack ={
  id:"",
  plan_price:'',
  plan_validity:"",
  plan_data:"",
}
  error:string="";
  id:string="";
  constructor(router: ActivatedRoute){
    router.queryParams.subscribe((params) => {return this.error = params['error']});
    router.queryParams.subscribe((params) => {return this.id = params['id']});
    (async () => {
      this.editPack=  (await axios.get('http://localhost:8000/fetch?id='+this.id)).data[0]
    } )()
  }
    editdongle = async () => {
     let editPlan = new FormData();
     editPlan.append('price',this.editPack.plan_price);
     editPlan.append('data',this.editPack.plan_data);
     editPlan.append('validity',this.editPack.plan_validity)
     editPlan.append('id',this.editPack.id)
     const resp = (await axios.post("http://localhost:8000/edit",editPlan));
     window.location=resp.data;
  }
}


@Component({
  selector: 'app-adminpostpaid',
  templateUrl: './adminpostpaid.component.html',
})
export class AdminpostpaidComponent{
  viBestPack=[
    {
      'plan_price':'',
      'plan_talktime':'',
      'plan_data':'',
      'id':'',
      'plan_usage':'0'
    }
  ]
  constructor(){
    (async () => {
      try {
        this.viBestPack = (await axios.get("http://localhost:8000/postplan?best=6")).data
      } catch (error) {
        console.log(error)
      }
    })()
  }
}

@Component({
  selector: 'app-newpostpaid',
  templateUrl: './newpostpaid.component.html',
})
export class NewpostpaidComponent{
  newplan_price:string="";
  newplan_talktime:string="";
  newplan_data:string="";
  error:string="";
  constructor(router: ActivatedRoute){
    router.queryParams.subscribe((params) => {return this.error = params['error']})
  }
  newPlan = async () => {
    let newPlan = new FormData();
    newPlan.append('price',this.newplan_price);
    newPlan.append('talktime',this.newplan_talktime);
    newPlan.append('data',this.newplan_data);
    const resp = (await axios.post("http://localhost:8000/newpost" ,newPlan));
    window.location=resp.data;
  }
}

@Component({
  selector: 'app-viewpostpaid',
  templateUrl: './viewpostpaid.component.html',
})
export class ViewpostpaidComponent{
  viAllPack= [{
   'plan_price':'',
    'plan_talktime':'',
    'plan_data':'',
    'id':'',
    'plan_usage':''
  }]
  error: string="";
  success: string="";
  constructor(router: ActivatedRoute)
  {
    router.queryParams.subscribe((params) => {
      this.error=params['error'];
      this.success=params['success'];
    });
    (async () => {
      this.viAllPack = (await axios.get('http://localhost:8000/postplan?all=True')).data
    })()
  }

 deleteThisPack = async (e:any) => {
    const resp = await axios.delete("http://localhost:8000/dltplan?plan="+e)
    window.location=resp.data
  }
}


@Component({
  selector: 'app-editpostpaid',
  templateUrl: './editpostpaid.component.html',
})
export class EditpostpaidComponent{
  editPack ={
  id:"",
  plan_price:'',
  plan_talktime :"",
  plan_data:"",
}
  error:string="";
  id:string="";
  constructor(router: ActivatedRoute){
    router.queryParams.subscribe((params) => {return this.error = params['error']});
    router.queryParams.subscribe((params) => {return this.id = params['id']});
    (async () => {
      this.editPack=  (await axios.get('http://localhost:8000/fetchpostplan?id='+this.id)).data[0]
    } )()
  }
    editplan = async () => {
     let editPlan = new FormData();
     editPlan.append('price',this.editPack.plan_price);
     editPlan.append('talktime',this.editPack.plan_talktime);
     editPlan.append('data',this.editPack.plan_data);
     editPlan.append('id',this.editPack.id)
     const resp = (await axios.post("http://localhost:8000/editpostplan",editPlan));
     window.location=resp.data;
  }
}

