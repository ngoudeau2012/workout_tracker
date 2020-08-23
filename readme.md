# Workout Tracker

Workout Tracker is a full-stack application that allows users to track and view all of their workouts. The user may add to or view their latest workout, or start a new workout where they can enter information about the exercises they completed. Through the dashboard, the user can view graphical representations of their workouts on a day to day basis. 

Building this application thought the pros and cons of using a noNQL database. Although they have a tone of flexibility, noSQL databases are more difficult to debug due to the fact that they rarely throw errors if something is the request to the db is off. I spent a decent amount of time debugging my put request to add an exercise to the workout exercises array because I had a minor typo. Typically that would be something really easy to pinpoint, but because the db wasn't throwing any errors, I had to console debug. 

<p float="left">
<img src="./public/images/homepage.png" alt="Home Page Image" width="45%" style="margin: 10px;"/>
<img src="./public/images/cardio.png" alt="Cardio Image" width="45%" style="margin: 10px;"/>
<img src="./public/images/resistance.png" alt="Resistance Image" width="45%" style="margin: 10px;"/>
<img src="./public/images/dashboard.png" alt="Dashboard Image" width="45%" style="margin: 10px;"/>
</p>

## Table of Contents
* [Technologies](#technologies)
* [Usage](#usage)
* [Finished Product](#finished-product)
* [Questions](#questions)

## Technologies
- [HTML](https://html.com/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongo Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Chart.js](https://www.chartjs.org/)
- [Heroku](https://dashboard.heroku.com/apps)

## Usage
* Navigate to the [deployed Heroku App](https://ng-workout-tracker.herokuapp.com).
* On the home page the user is presented with their last workout. If they choose to continue this workout they may click "Continue Workout" to add another exercise.
* If the user wants to begin a new workout press the "New Workout" button.
* Choose an exercise type: Cardio or Resistance.
* Enter relevant information about the exercise into input fields (name, miles, distance, weight, reps, etc.)
* Choose to complete the workout or add another exercise. 
* Once workout is complete the user selects "Complete". Then they are taken back to the home screen where they can view their last workout information.
* User may navigate to the dashboard page to view charts representing their workout progress. Categories include duration of workout by day, duration by exercise type, weight lifted by exercise, and weight lifted by day.

## Finished Product
View deployed Heroku app [here](https://ng-workout-tracker.herokuapp.com).

![](./public/images/workoutTracker.gif)

## Questions
​
If you have any questions about the repo, please contact me:

On GitHub: [ngoudeau2012](https://github.com/ngoudeau2012) | Via Email: ngoudeau2012@gmail.com