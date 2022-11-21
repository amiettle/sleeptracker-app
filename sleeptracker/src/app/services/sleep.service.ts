import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor(private firestore:AngularFirestore) {
	}

	// private addDefaultData() {
	// }

	// public logOvernightData(sleepData:SleepLogModel) {
	// 	this.firestore.collection("sleep").add({sleepData});
	// }

	// public logSleepinessData(sleepData:StanfordSleepinessData) {
	// 	SleepService.AllSleepData.push(sleepData);
	// 	SleepService.AllSleepinessData.push(sleepData);
	// }
}
