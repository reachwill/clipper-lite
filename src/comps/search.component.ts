import {Component} from 'angular2/core';
import {Control} from 'angular2/common';
import {YouTubeAPI} from '../youtube';
import 'rxjs/Rx';

@Component({
  selector: 'search',
  providers: [YouTubeAPI],
  template:`
    <input [ngFormControl]="search">
    <div *ngFor="#video of results | async">
      <h3>{{video.snippet.title}}</h3>
      <p>{{video.snippet.title}}</p>
      <img [src]="video.snippet.thumbnails.default.url"/>
    </div>
  `,
  styles:[`
    
  `],
  
})
export class Search  {
  search = new Control();
  results: Observable<any>;
  constructor(public youtube:YouTubeAPI) {
   console.log('huh');
   //observable of results
   this.results = 
   //input value change observable
    this.search.valueChanges
      .debounceTime(200) //debounce for 200ms
      .switchMap(query => youtube.search(query));
      //switchMap flattens the async and cancels the pending request if a new value is requested
  }
}
