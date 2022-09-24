import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit, AfterViewInit {
  constructor() { 
  }
  ngOnInit(): void {
  }
  userChartCanvas:any;
  userChart:any;
  
  ngAfterViewInit()
  {
    renderUserCountChart(this.userChartCanvas,this.userChart)
  }
}

function renderUserCountChart(userChartCanvas:any,userChart:any)
{
  userChartCanvas = document.getElementById('user')
  userChart = userChartCanvas.getContext('2d')
  new Chart(userChart,
    {
      type: 'bar',
      data: {
          labels: ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decembers'],
          datasets: [{
              label: 'No of Users',
              data: [12, 19, 3, 5, 2, 3, 12, 11,  50, 43,32,21],
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

