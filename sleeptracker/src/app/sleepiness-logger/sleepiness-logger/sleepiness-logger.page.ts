import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-sleepiness-logger',
  templateUrl: './sleepiness-logger.page.html',
  styleUrls: ['./sleepiness-logger.page.scss'],
})
export class SleepinessLoggerPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  entryName: string;
  sleepiness: number;
  entryDate: string; //Input gives back a string so its gonna be a string
  entries: Array<any>;

  constructor(private store: AngularFirestore) {
    //this.entryDate=new Date().toISOString().split('T')[0]; //Input gives back a string, so entry date will be current dateTime in IsoString, dropping time portion 2011-10-05T14:48:00.000Z ->2011-10-05
  }

  ngOnInit() {
    //this.getSleepiness();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.entryName, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      // add entry with title and sleepiness rating into database
      console.log(this.sleepiness);
      this.logSleepiness()
      
    }
  }
  logSleepiness(){
    this.store.collection("sleepiness").add({"sleepiness":this.sleepiness,"title":this.entryName, "logged":new Date()})
  }
  getSleepiness(){
    this.store.collection("sleepiness",ref=>ref.where("logged",">=",this.addDays(new Date(this.entryDate+"T00:00"),0)).where("logged","<=",this.addDays(new Date(this.entryDate+"T00:00"),1)).orderBy("logged","desc")).get().subscribe((querySnap)=>{
      this.entries = querySnap.docs.map(doc=>{
        //console.log(doc.data())
        return {...doc.data() as object}
      })
      console.log(this.entries)

      });
  }
  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  logEntries(){
    console.log(this.entries)
  }

  getDate(entry){
    return new Date(entry.logged.seconds*1000).toLocaleTimeString()
  }
}

