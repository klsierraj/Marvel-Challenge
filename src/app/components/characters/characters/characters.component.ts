import { Component, OnInit } from '@angular/core';
import { HeroesMarvelService } from 'src/app/services/heroes-marvel.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [HeroesMarvelService]
})
export class CharactersComponent implements OnInit {
  public characters: any;
  public comic: any;
  public onlyComic: any;
  public comicR: any;
  public onlyComicR: any;
  public favorites: any[] = [];
  public characterFilter: any = { name: '' };
  p: number = 1;


  constructor(
    private _characterService: HeroesMarvelService
  ) { }

  ngOnInit(): void {
    this._characterService.getCharacters().subscribe((response) => {
      if(response) {
        this.characters = response.data.results;

      }
      else {

      }
      console.log(this.characters);
    }, (error) => {
      console.log(`Error: ${error}`);
      
    }
    );

    Object.values(localStorage).forEach((e: any, i) => {
      this.favorites.push(JSON.parse(e));
    })
  }

getComic(urlComic: string) {
  this._characterService.getComicInd(urlComic).subscribe((responseComic)=> {
    if(responseComic) {
      this.comic = responseComic;
      this.onlyComic = this.comic.data.results[0];
    }else{}
    //console.log(this.onlyComic);
  },(error) => {
    console.log(error)
  }
  
  );
}

closeModal() {
  this.onlyComic = '';
}

saveComic(id:number, content:any) {
  localStorage.setItem( id + '_id', JSON.stringify(content) );
  this.favorites = [];
  Object.values(localStorage).forEach((e: any, i) => {
    this.favorites.push(JSON.parse(e));
  });
  console.log(this.favorites);
}

deleteComic(id:number) {
  localStorage.removeItem(id + '_id');
  this.favorites = [];
  Object.values(localStorage).forEach((e:any , i) => {
    this.favorites.push(JSON.parse(e));
  });
}


 getRandomComics () {
   this._characterService.getRandomComic().subscribe ((response) => {
     if(response) {
       this.comicR = response;
       this.onlyComicR = this.comicR.data.results;

       for(let i = 0; i <=2; i++) {
         let randomElement = this.onlyComicR[Math.floor(Math.random()*this.onlyComicR.lenght)];
         this.saveComic(randomElement.id, randomElement)
       }
     }else {

     }

   }, (error) => {
     console.log(error)
   }
   );

 }

}
