import { Injectable } from '@angular/core';

/*
  Generated class for the MagicBallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MagicBallProvider {

  answers: any;

  constructor() {
    
    this.answers = [
      'Yes',
      'No',
      'Maybe',
      'All signs point to yes',
      'Try again later',
      'Withouth a doubt',
      'Don\'t count on it',
      'Most likely',
      'Absolutely not'
    ];

  }

  getAnswers(){
    return this.answers;
  }

  getRandomAnswer(){
    return this.answers[this.getRandomInt(0, this.answers.length-1)];
  }

  getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1)) + min;
  }

}
