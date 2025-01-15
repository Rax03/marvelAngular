import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  title = 'Characters';
  characters?: Observable<any>;

  constructor(private marvelSvc: MarvelService, private router: Router) { }

  ngOnInit() {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.characters = this.marvelSvc.getCharacters();
  }

  getCharacter(id: string) {
    this.router.navigate(['/character/', id]);
  }

  addCharacter() {
    const newCharacter = {
      name: 'Iron Man',
      description: 'Genius, billionaire, playboy, philanthropist'
    };
    this.marvelSvc.addCharacter(newCharacter).subscribe(
      response => {
        console.log('Character added:', response);
        this.getAllCharacters(); // Actualizar la lista de personajes
      },
      error => {
        console.error('Error adding character:', error);
      }
    );
  }
}
