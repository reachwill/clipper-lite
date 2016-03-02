var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//our root app component
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var youtube_1 = require('./youtube');
require('rxjs/Rx');
var App = (function () {
    function App(youtube) {
        this.youtube = youtube;
        this.search = new common_1.Control();
        //observable of results
        this.results =
            //input value change observable
            this.search.valueChanges
                .debounceTime(200) //debounce for 200ms
                .switchMap(function (query) { return youtube.search(query); });
        //switchMap flattens the async and cancels the pending request if a new value is requested
    }
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [youtube_1.YouTubeAPI],
            template: "\n    <h1>YouTube Search</h1>\n    <input [ngFormControl]=\"search\">\n    <div *ngFor=\"#video of results | async\">\n      <h3>{{video.snippet.title}}</h3>\n      <p>{{video.snippet.title}}</p>\n      <img [src]=\"video.snippet.thumbnails.default.url\"/>\n    </div>\n  "
        })
    ], App);
    return App;
})();
exports.App = App;
