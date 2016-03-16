import {Component} from 'angular2/core';

@Component({
  selector: 'consumer',
  template:`
   hello consumer
  `,
  styles:[`
    
  `],
  
})
export class Consumer  {
    constructor() {
        console.log('consumer created');
    }
    
     
}
