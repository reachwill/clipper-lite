System.register(['angular2/core', 'angular2/common', './youtube', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, youtube_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (youtube_1_1) {
                youtube_1 = youtube_1_1;
            },
            function (_1) {}],
        execute: function() {
            App = (function () {
                function App(youtube) {
                    this.youtube = youtube;
                    this.search = new common_1.Control();
                    console.log('huh');
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
                        template: "\n    <h1>YouTube Search</h1>\n    <input [ngFormControl]=\"search\">\n    <div *ngFor=\"#video of results | async\">\n      <h3>{{video.snippet.title}}</h3>\n      <p>{{video.snippet.title}}</p>\n      <img [src]=\"video.snippet.thumbnails.default.url\"/>\n    </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [youtube_1.YouTubeAPI])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map