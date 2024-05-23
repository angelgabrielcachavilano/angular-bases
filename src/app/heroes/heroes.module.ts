import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";


@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  exports: [
    ListComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
    // se agrega el CommonModule para que funciones las directivas a la hora de exportar
    // los componentes u/o modulos al appModule
  ]
})
export class HeroesModule {

}
