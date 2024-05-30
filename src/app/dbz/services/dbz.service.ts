import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';


@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    }, {
      id: uuid(),
      name: 'Goku',
      power: 9500
    }, {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  newCharacter(character: Character): void {
    // el metodo puede tener cualquier nombre
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }
    // o se podria usar esta opcion --> const newCharacter: Character = {uuid, ...character};
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}

