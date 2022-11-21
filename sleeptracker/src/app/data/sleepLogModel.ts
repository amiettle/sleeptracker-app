export class SleepLogModel{
    sleepStart: Date;
    sleepEnd: Date;
    startString:String;
    endString:String;

    constructor(start:Date,end:Date){
        this.sleepStart=start;
        this.sleepEnd=end;
       
    }

    getStart():string{
        return this.sleepStart.toLocaleTimeString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    }

    getEnd():string{
        return this.sleepEnd.toLocaleTimeString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    }

    
}