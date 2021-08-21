import { Injectable } from '@angular/core';
import { Global } from './global';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import {  Observable  } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroesMarvelService {
  public url: string;
  private key: string;
  private randomComicUrl: string;

  constructor(
    private _http: HttpClient
  ) {

    this.url = Global.url;
    this.key= Global.key;
    this.randomComicUrl = Global.comicsUrl;

   }

   getCharacters():Observable<any> {
     return this._http.get(this.url);
   }
   getComicInd(comic:string) {
     return this._http.get(comic + this.key);

   }
   getRandomComic() {
     return this._http.get(this.randomComicUrl);
   }
}
