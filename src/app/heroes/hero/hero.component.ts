import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "IronMan";
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
    // el get al querer invocarlo figura como propiedad,
    // la funcion figura como un metodo y necesita parentesis para invocarse
  }

  getHeroDescription(): string {
    // si al metodo se le vuelve privado no se puede utilizar en el html,
    //  solo en el ts
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = "Spiderman";
  }

  changeAge(): void {
    this.age = 23;
  }

  reset(): void {
    this.name = "IronMan";
    this.age = 45;
  }
};

