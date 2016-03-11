//our root app component
import {Component} from 'angular2/core';

import {YouTubeAPI} from './youtube';
import {BigRedButton} from './comps/bigred.component';
import {Search} from './comps/search.component';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  providers: [YouTubeAPI],
  directives: [BigRedButton,Search],
  template: `
    <h1>ClipperLite</h1>
    <big-red-button></big-red-button>
    <search></search>
  `
})
export class App {
  
  
}