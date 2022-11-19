import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-sleepiness-logger',
  templateUrl: './sleepiness-logger.page.html',
  styleUrls: ['./sleepiness-logger.page.scss'],
})
export class SleepinessLoggerPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  entryName: string;
  sleepiness: number;
  entryDate: Date;

  constructor() { }

  ngOnInit() {
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
    }
  }

}
