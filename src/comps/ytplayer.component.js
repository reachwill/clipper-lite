System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var YTPlayer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            YTPlayer = (function () {
                function YTPlayer(elementRef) {
                    this._elementRef = elementRef;
                }
                YTPlayer.prototype.ngOnInit = function () {
                    console.log('Init - Component initialized');
                    this.videoJSplayer = videojs(document.getElementById('player'), {}, function () {
                        // This is functionally the same as the previous example.
                    });
                };
                YTPlayer.prototype.ngOnDestroy = function () {
                    console.log('Deinit - Destroyed Component');
                    this.videoJSplayer.dispose();
                };
                YTPlayer.prototype.loadVideo = function () {
                    console.log('load video');
                };
                YTPlayer = __decorate([
                    core_1.Component({
                        selector: 'yt-player',
                        template: "\n  <div class=\"player-container\">\n    <video\n        id=\"player\"\n        class=\"video-js vjs-default-skin\"\n        controls \n        width=\"640\" height=\"264\"\n        poster=\"media/clipper-logo-play-hires\" \n        data-setup='{ \"techOrder\": [\"youtube\"], \"sources\": [{ \"type\": \"video/youtube\", \"src\": \"http://www.youtube.com/watch?v=xjS6SftYQaQ\"}] }'\n    >\n    </video>\n  </div>\n  ",
                        styles: ["\n    \n  "],
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], YTPlayer);
                return YTPlayer;
            }());
            exports_1("YTPlayer", YTPlayer);
        }
    }
});
//# sourceMappingURL=ytplayer.component.js.map