import { StanfordSleepinessData } from './../data/stanford-sleepiness-data';
import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
@Component({
  selector: 'app-test-ui',
  templateUrl: './test-ui.component.html',
  styleUrls: ['./test-ui.component.scss'],
})
export class TestUIComponent implements OnInit {
  sleepStart:Date;
  sleepEnd:Date;
  constructor(private store:AngularFirestore) { }

  ngOnInit() {}

  logSleep(){
    this.store.collection("sleep").add({"sleepStart":this.sleepStart,"sleepEnd":this.sleepEnd});
  }

  getLogs(){
    this.store.collection("sleep",ref=>ref.orderBy("sleepEnd","desc")).get().subscribe(data=>console.log(data.docs))
  }

  logSleepiness(){
    this.store.collection("sleepiness").add({"sleepiness":1, "logged":new Date()})
  }

  getSleepiness(){
    this.store.collection("sleepiness",ref=>ref.orderBy("logged","desc")).get().subscribe(data=>console.log(data.docs))
  }
}


