//our root app component
import {Component} from 'angular2/core';

import {YouTubeAPI} from './youtube';
import {BigRedButton} from './comps/bigred.component';
import {Search} from './comps/search.component';
import {YTPlayer} from './comps/ytplayer.component';

import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  directives: [BigRedButton,Search,YTPlayer],
  template: `
    <h1>ClipperLite</h1>
    <big-red-button (clicked)="bigRedClicked($event)"></big-red-button>
    <yt-player></yt-player>
    <search></search>
  `
})
export class App {
    bigRedClicked(event){
        console.log('clecked at app')
        $('.video-container').addClass('red');
    }
}