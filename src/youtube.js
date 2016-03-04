var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
var API_TOKEN = 'AIzaSyBbeuQDIFpMxnDNxPWhXOEVMpaBzgyMBjY';
var YouTubeAPI = (function () {
    function YouTubeAPI(http) {
        this.http = http;
    }
    YouTubeAPI.prototype.search = function (query) {
        return this.http.get(BASE_URL + "?q=" + query + "&part=snippet&key=" + API_TOKEN)
            .map(function (res) { return res.json(); })
            .map(function (json) { return json.items; });
    };
    YouTubeAPI = __decorate([
        core_1.Injectable()
    ], YouTubeAPI);
    return YouTubeAPI;
})();
exports.YouTubeAPI = YouTubeAPI;
