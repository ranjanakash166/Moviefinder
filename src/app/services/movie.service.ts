import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable ()
export class MovieService {
    apiKey: string;
    constructor(private __jsonp: Jsonp) {
        this.apiKey = '172b29fb3df3436747b5ead860335aca';
        console.log('MovieService Initialized...');

    }
    getPopular() {
    return this.__jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apiKey)
                 .map(res => res.json());
    }
    getInTheaters () {
    return  this.__jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=' + this.apiKey)
        .map(res => res.json());
    }

    searchMovies(searchStr: string) {
        return this.__jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apiKey)
            .map( res => res.json());
    }
    getMovie(id: string) {
        return this.__jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apiKey)
            .map( res => res.json());
    }

}
