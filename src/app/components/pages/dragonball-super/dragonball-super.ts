import { Component, inject } from '@angular/core';
import { CharacterList } from "../../dragonball/character-list/character-list";
import { CharacterAdd } from "../../dragonball/character-add/character-add";
import { DragonballService } from '../../../services/dragonball.service';

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

  public dragonballService = inject(DragonballService);



}
