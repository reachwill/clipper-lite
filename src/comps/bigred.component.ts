import {Component} from 'angular2/core';

@Component({
  selector: 'big-red-button',
  template:`
    <a href="#" id="bigRedBtn">Record</a>
  `,
  styles:[`
    #bigRedBtn{border:1px solid black; width:100%; height:65px; background:red;}
  `],
  
})
export class BigRedButton  {
  constructor() {
      console.log('big red created');
   }
}
