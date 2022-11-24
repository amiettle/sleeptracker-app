--Readme document for Kenny Tran, kennyt11@uci.edu, 87199643 and Amie Le, amietl@uci, 80002154

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

20/20
- 2/2 The ability to log overnight sleep
- 2/2 The ability to log sleepiness during the day
- 2/2 The ability to view these two categories of logged data
- 4/4 Either using a native device resource or backing up logged data
- 4/4 Following good principles of mobile design
- 4/4 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
    About 15 hours


3. What online resources did you consult when completing this assignment? (list specific URLs)
https://ionicframework.com/docs/components
https://github.com/angular/angularfire


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
    Just each other: Amie Le & Kenny Tran


5. Is there anything special we need to know in order to run your code?
    Should just need an npm install


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
    No, anyone can use it, but the app is designed to work for a mobile device user: android or ios


7. Did you design your app specifically for iOS or Android, or both?
    Both. We did not use any native device features.


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
    You can log overnight sleep by pressing the start then stop button. This is designed to be press when you sleep and wakeup.
    Or enter the date and time you slept and woke up manually.


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
    There will be a button at the bottom of the screen that will popup a modal dialog where you can input the sleepiness info.
    Then press confirm.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
    For overnight sleep,  the data is displayed write below the input form. This way they can see all the info on the same screen and scroll to see older dates.
    For sleepiness they select a day, and the logs for that day is displayed.


11. Which feature choose--using a native device resource, backing up logged data, or both?
    Backing up data


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
    N/A


13. If you backed up logged data, where does it back up to?
    It backs up to firebase's firestore database.

14. How does your app implement or follow principles of good mobile design?
    We have a useful initial view, and allow users to return to previous screens if they misclicked. 
    The app is designed to be easy to use for mobile devices, e.g a start/stop button to log sleep. 
