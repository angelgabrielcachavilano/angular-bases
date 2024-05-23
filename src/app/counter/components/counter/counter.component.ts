import { Component } from "@angular/core";

// con el snippet a-component se puede crear todo esto

@Component({
  // El componente tiene 2 propiedadees
  // el selector que es como quiero yo llamar a mi componente
  // y el template, que puede ser templateUrl o template, que se usa para mostrar info
  selector: 'app-counter', // se usa sufijos como app para indicar que es un componente personalizado
  template: `
  <h3> El couter es: {{ counter }} </h3>

  <button (click)="increasseBy(+1)"> +1 </button>
  <button (click)="increasseBy(-1)"> -1 </button>
  <button (click)="resetCounter()" > reset </button> `
})
export class CounterComponent {
  // Para que este componente funcione hay que agregarlo en el modulo, en este caso,
  //  el unico modulo que existe es el app.component.ts
  // luego se utiliza con el selector
  // si se crea con el comando ng g c counter lo agrega angular cli por si solo

  public counter: number = 10;

  increasseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}

// Interpolacion

/* */
