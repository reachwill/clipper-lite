import {Component} from 'angular2/core';

@Component({
  selector: 'consumer',
  template: '<h1>Consumer</h1>'
})

export class Consumer {
    constructor() {
        console.log('consumer created');
    }
}
