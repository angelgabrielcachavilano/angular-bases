import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Winter Soldier']
  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.heroes.pop();
  }
}
