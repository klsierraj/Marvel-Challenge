import { Component, OnInit } from '@angular/core';
import { HeroesMarvelService } from 'src/app/services/heroes-marvel.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public characters: any;
  public favorites: any[] = [];


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

}
