import { Component, signal } from '@angular/core';
import { CharacterList } from "../../dragonball/character-list/character-list";
import { CharacterAdd } from "../../dragonball/character-add/character-add";

interface Character {
  id: number;
  name: string;
  power: number;

}


@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super.html'
})
export class DragonballSuper {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8001 },
    { id: 3, name: 'Vasdfaegeta', power: 8001 },

  ]);

  addCharacter(character: Character) {
    this.characters.update(
      list => [...list, character]
    );



  }


}
