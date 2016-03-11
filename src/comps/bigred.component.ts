import {Component} from 'angular2/core';

@Component({
  selector: 'big-red-button',
  template:`
    <a href="#" id="bigRedBtn">Record</a>
  `,
  styles:[`
    
  `],
  
})
export class BigRedButton  {
  constructor() {
      console.log('big red created');
   }
}
