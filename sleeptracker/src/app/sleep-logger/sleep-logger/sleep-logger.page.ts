import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sleep-logger',
  templateUrl: './sleep-logger.page.html',
  styleUrls: ['./sleep-logger.page.scss'],
})
export class SleepLoggerPage implements OnInit {

  startDate:Date;
  startTime:Time;
  endDate:Date;
  endTime:Time;

  constructor() { }

  ngOnInit() {
  }

  logEntry() {
    var startDate = this.startDate;
    var startTime = this.startTime;
    var endDate = this.endDate;
    var endTime = this.endTime;
    console.log(startDate, startTime, endDate, endTime);
  }

}
