import { SleepLogModel } from './../../data/sleepLogModel';
import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Component({
  selector: 'app-sleep-logger',
  templateUrl: './sleep-logger.page.html',
  styleUrls: ['./sleep-logger.page.scss'],
})
export class SleepLoggerPage implements OnInit {

  sleepStart:Date;
  sleepEnd:Date;
  entries: Array<any>;
  constructor(private store:AngularFirestore) {
    this.store.collection("sleep").valueChanges()
   }
  
  ngOnInit() {
  }

  logSleep(){

    this.store.collection("sleep").add({"sleepStart":this.sleepStart,"sleepEnd":this.sleepEnd});
  }
  
  getLogs(){
    this.store.collection("sleep",ref=>ref.orderBy("sleepEnd","desc")).get().subscribe((querySnap)=>{
      this.entries = querySnap.docs.map(doc=>{
        console.log((doc.data()["sleepStart"]))
        return new SleepLogModel(new Date(doc.data()["sleepStart"]), new Date(doc.data()["sleepEnd"]))
      });
      console.log(this.entries)
    })
  }
}
