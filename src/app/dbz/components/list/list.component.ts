import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  // es conveniente usar el nombre del modulo por si llegara a existir
  // otro componente con el mismo nombre
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteItem(id: string): void {
    console.log(id);
    this.onDelete.emit(id);
  }
}
