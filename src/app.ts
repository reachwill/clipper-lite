//our root app component
import {Component} from 'angular2/core';

import {Editor} from './comps/editor.component';
import {Social} from './comps/social.component';
import {Consumer} from './comps/consumer.component';



@Component({
  selector: 'my-app',
  directives: [Editor,Social,Consumer],
  template: `
    <editor></editor>

    <social></social>
    <consumer></consumer>
  `
})
export class App {
    
    
}