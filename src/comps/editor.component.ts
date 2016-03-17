//our root app component
import {Component} from 'angular2/core';

import {YouTubeAPI} from '../youtube';
import {BigRedButton} from '../comps/bigred.component';
import {Search} from '../comps/search.component';
import {YTPlayer} from '../comps/ytplayer.component';


import 'rxjs/Rx';

@Component({
  selector: 'editor',
  directives: [BigRedButton,Search,YTPlayer],
  template: `
    <div id="top-bar"></div>
    <div id="edit-controls">
        <a href="#" class="search" (click)="toggleSearch($event)"><span class="icon-search"></span></a>
        <big-red-button (clicked)="bigRedClicked($event)"></big-red-button>
    </div>
    
    <yt-player></yt-player>
    <search id="searchBox" (resultClicked)="searchResultClicked($event)"></search>
   
  `
})
export class Editor {
    
    constructor() {
        console.log('editor created');
        
    }
    
    _vidURL:string;
    _start:string;
    _end:string;
    _shareURL:string;
    
    toggleSearch(event){
        $('#searchBox').toggle();
    }
    
    
    bigRedClicked(event){
        console.log(window.location.hostname)  
        $('.player-container').toggleClass('red');
        if($('.player-container').hasClass('red')){
            this._start = 'start=' + Math.round(videojs('#player').currentTime());
        }else{
            this._end = 'end=' + Math.round(videojs('#player').currentTime());
        }
        this._shareURL = this._vidURL + this._start + '&' + this._end +'&version=3.0';
        console.log(this._shareURL);
    }
    
     searchResultClicked(event){
        videojs('#player').src({"src":"https://www.youtube.com/watch?v="+event.id});
        videojs('#player').play();
        //record current video url in public vidURL var ready with & for start end params
        this._vidURL = videojs('#player').src().src + '&';
        
        $('#searchBox').fadeToggle();
    }
}