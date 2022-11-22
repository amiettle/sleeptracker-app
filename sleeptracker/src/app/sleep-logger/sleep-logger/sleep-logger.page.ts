import { SleepLogModel } from './../../data/sleepLogModel';
import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import * as moment from 'moment'
@Component({
  selector: 'app-sleep-logger',
  templateUrl: './sleep-logger.page.html',
  styleUrls: ['./sleep-logger.page.scss'],
})
export class SleepLoggerPage implements OnInit {

  sleepStart:Date = null;
  sleepEnd:Date = null;
  entries: Array<any>;

  manualStart = '';
  manualEnd = '';
  constructor(private store:AngularFirestore) {
    this.getLogs()
    this.store.collection("sleep").valueChanges().subscribe(()=>{this.getLogs()})
   }
  
  ngOnInit() {
  }

  logSleep(){
    this.store.collection("sleep").add({"sleepStart":this.sleepStart,"sleepEnd":this.sleepEnd});
  }

  start(){
    this.sleepStart=new Date();
    console.log(this.sleepStart)
  }
  stop(){
    this.sleepEnd= new Date();
    console.log(this.sleepEnd)
    this.logSleep()
    this.sleepStart=null;
    this.sleepEnd=null;

  }
  
  getLogs(){
    console.log("getting logs..")
    this.store.collection("sleep",ref=>ref.orderBy("sleepEnd","desc")).get().subscribe((querySnap)=>{
      this.entries = querySnap.docs.map(doc=>{
        return {"start":new Date(doc.data()["sleepStart"].seconds*1000),"end":new Date(doc.data()["sleepEnd"].seconds*1000)}
      })
      console.log(this.entries);
    })  
  }

  getDifference(start:Date, end:Date){
    const end_moment = moment(end);
    const start_moment = moment(start);
    const duration = moment.duration(end_moment.diff(start_moment))
    return Math.floor(duration.asMinutes()/60) +' HOURS, '+ Math.ceil(duration.asMinutes()%60) + 'MINUTES'
  }

  logManualSleep(){
    console.log(this.manualStart)
    console.log(this.manualEnd)
    this.store.collection("sleep").add({"sleepStart":new Date(this.manualStart),"sleepEnd":new Date(this.manualEnd)});
  }
}



