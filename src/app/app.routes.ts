import { Dragonball } from './components/pages/dragonball/dragonball';
import { Routes } from '@angular/router';
import { CounterPageComponent } from './components/pages/counter/counter-page.component';
import { HeroPageComponent } from './components/pages/hero/hero-page.component';
import { DragonballSuper } from './components/pages/dragonball-super/dragonball-super';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: Dragonball
  },
  {
    path: 'dragonballSuper',
    component: DragonballSuper
  },
  {
    path: '**',
    redirectTo: ''
  }
];
