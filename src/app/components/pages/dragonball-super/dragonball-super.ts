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

  name = signal('');
  power = signal(0);




  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8001 },
    { id: 3, name: 'Vasdfaegeta', power: 8001 },

  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true
  //   }
  // })

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    this.characters.update(list => [...list, newCharacter]);
    this.resetFields()
  }
  resetFields() {
    this.name.set('');
    this.power.set(0)
  }

}
