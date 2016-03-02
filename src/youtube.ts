import {Http, HTTP_BINDINGS, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';

@Injectable()
export class YouTubeAPI {
  constructor(private http:Http){}
  
  search(query){
    return this.http.get(`${BASE_URL}?q=${query}&part=snippet&key=${API_TOKEN}`)
      .map((res:Response) => res.json())
      .map(json => json.items);
  }
}