import {Component,View} from 'angular2/core';

@Component({
  selector: 'consumer'
})
@View({
  template: '<h1>Consumer</h1>'
})
export class Consumer {
    constructor() {
        console.log('consumer created');
    }
}