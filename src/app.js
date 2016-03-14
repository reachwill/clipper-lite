System.register(['angular2/core', './comps/bigred.component', './comps/search.component', './comps/ytplayer.component', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, bigred_component_1, search_component_1, ytplayer_component_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bigred_component_1_1) {
                bigred_component_1 = bigred_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (ytplayer_component_1_1) {
                ytplayer_component_1 = ytplayer_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.bigRedClicked = function (event) {
                    //console.log('clicked at app')
                    $('.player-container').addClass('red');
                };
                App.prototype.searchResultClicked = function (event) {
                    //console.log(event.id);
                    videojs('#player').src({ "src": "https://www.youtube.com/watch?v=" + event.id });
                    videojs('#player').play();
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [bigred_component_1.BigRedButton, search_component_1.Search, ytplayer_component_1.YTPlayer],
                        template: "\n    <h1>ClipperLite</h1>\n    <big-red-button (clicked)=\"bigRedClicked($event)\"></big-red-button>\n    <yt-player #p></yt-player>\n    <search (resultClicked)=\"searchResultClicked($event)\"></search>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map