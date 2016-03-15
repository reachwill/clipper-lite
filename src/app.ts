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
    <div id="top-bar">
        <a href="#" class="search" (click)="toggleSearch($event)"><span class="icon-search right">search</span></a>
    </div>
    <div id="toolbar">
        
    </div>
    <big-red-button (clicked)="bigRedClicked($event)"></big-red-button>
    <yt-player></yt-player>
    <search id="searchBox" (resultClicked)="searchResultClicked($event)"></search>
  `
})
export class App {
    
    toggleSearch(event){
        $('#searchBox').toggle();
    }
    
    
    bigRedClicked(event){  
        $('.player-container').toggleClass('red');
    }
    
     searchResultClicked(event){
        videojs('#player').src({"src":"https://www.youtube.com/watch?v="+event.id});
        videojs('#player').play();
        $('#searchBox').fadeToggle();
    }
}