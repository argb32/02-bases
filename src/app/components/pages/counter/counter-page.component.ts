
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})


export class CounterPageComponent {

  counter = 10;
  counterSignal = signal(10)


  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(currentValue => currentValue + 1)
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update(currentValue => currentValue - 1)

  }

}
