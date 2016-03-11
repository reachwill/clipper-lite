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
                function YTPlayer() {
                    console.log('ytplayer created');
                }
                YTPlayer = __decorate([
                    core_1.Component({
                        selector: 'yt-player',
                        template: "\n    <video id=\"my-video\" class=\"video-js\" controls preload=\"auto\" width=\"640\" height=\"264\"\n  poster=\"MY_VIDEO_POSTER.jpg\" data-setup=\"{}\">\n    <source src=\"MY_VIDEO.mp4\" type='video/mp4'>\n    <source src=\"MY_VIDEO.webm\" type='video/webm'>\n    <p class=\"vjs-no-js\">\n      To view this video please enable JavaScript, and consider upgrading to a web browser that\n      <a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">supports HTML5 video</a>\n    </p>\n  </video>\n  ",
                        styles: ["\n    \n  "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], YTPlayer);
                return YTPlayer;
            }());
            exports_1("YTPlayer", YTPlayer);
        }
    }
});
//# sourceMappingURL=ytplayer.component.js.map