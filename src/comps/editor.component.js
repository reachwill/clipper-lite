System.register(['angular2/core', '../comps/bigred.component', '../comps/search.component', '../comps/ytplayer.component', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var Editor;
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
            Editor = (function () {
                function Editor() {
                    console.log('editor created');
                }
                Editor.prototype.toggleSearch = function (event) {
                    $('#searchBox').toggle();
                };
                Editor.prototype.bigRedClicked = function (event) {
                    console.log(window.location.hostname);
                    $('.player-container').toggleClass('red');
                    if ($('.player-container').hasClass('red')) {
                        this._start = 'start=' + Math.round(videojs('#player').currentTime());
                    }
                    else {
                        this._end = 'end=' + Math.round(videojs('#player').currentTime());
                    }
                    this._shareURL = this._vidURL + this._start + '&' + this._end + '&version=3.0';
                    console.log(this._shareURL);
                };
                Editor.prototype.searchResultClicked = function (event) {
                    videojs('#player').src({ "src": "https://www.youtube.com/watch?v=" + event.id });
                    videojs('#player').play();
                    //record current video url in public vidURL var ready with & for start end params
                    this._vidURL = videojs('#player').src().src + '&';
                    $('#searchBox').fadeToggle();
                };
                Editor = __decorate([
                    core_1.Component({
                        selector: 'editor',
                        directives: [bigred_component_1.BigRedButton, search_component_1.Search, ytplayer_component_1.YTPlayer],
                        template: "\n    <div id=\"top-bar\"></div>\n    <div id=\"edit-controls\">\n        <a href=\"#\" class=\"search\" (click)=\"toggleSearch($event)\"><span class=\"icon-search\"></span></a>\n        <big-red-button (clicked)=\"bigRedClicked($event)\"></big-red-button>\n    </div>\n    \n    <yt-player></yt-player>\n    <search id=\"searchBox\" (resultClicked)=\"searchResultClicked($event)\"></search>\n   \n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Editor);
                return Editor;
            }());
            exports_1("Editor", Editor);
        }
    }
});
//# sourceMappingURL=editor.component.js.map