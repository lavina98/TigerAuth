import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Chart } from 'chart.js';


// import * as CanvasJS from '../../../node_modules/canvasjs';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  @ViewChild('lineChart') private chartRef;
  chart: any;
  selectClient: FormGroup;
  clients = ['site1', 'site2', 'site3'];

  public pieChartLabels: string[] = ['Pending', 'InProgress', 'OnHold', 'Complete', 'Cancelled'];
  public pieChartData: number[] = [21, 39, 10, 14, 16];
  public pieChartType = 'pie';
  public pieChartOptions: any = {
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ]
  };

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    // get client list from api
    // client =
    this.selectClient = this.fb.group({
      clientName: this.fb.control('')
    });
    console.log(this.getCorrectTime(Number('1551323323')));
    const date = new Date(1551323323000).toString().split(' ');
    console.log(date);
    console.log(new Date(1551376323000));
    const labelSet = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    const dataPoints = [2500, 1905, 2278, 1982, 2767, 2109, 1898, 1934, 2935, 2200, 1856, 1981];

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: labelSet, // your labels array
        datasets: [
          {
            data: dataPoints, // your data array
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

  }

  getCorrectTime(unix: number) {
    const a = new Date(unix * 1000);
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    console.log(this.selectClient.value);
    return time;
    // return Date.prototype.toISOString();
    // console.log(timeConverter(0));
  }

  change() {
    console.log(this.selectClient.value);
  }

}
