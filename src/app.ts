//our root app component
import {Component} from 'angular2/core';
import {Control} from 'angular2/common';
import {YouTubeAPI} from './youtube';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  providers: [YouTubeAPI]
  template: `
    <h1>YouTube Search</h1>
    <input [ngFormControl]="search">
    <div *ngFor="#video of results | async">
      <h3>{{video.snippet.title}}</h3>
      <p>{{video.snippet.title}}</p>
      <img [src]="video.snippet.thumbnails.default.url"/>
    </div>
  `,
})
export class App {
  search = new Control();
  results: Observable<any>;
  constructor(public youtube:YouTubeAPI) {
   
   //observable of results
   this.results = 
   //input value change observable
    this.search.valueChanges
      .debounceTime(200) //debounce for 200ms
      .switchMap(query => youtube.search(query));
      //switchMap flattens the async and cancels the pending request if a new value is requested
  }
  
}