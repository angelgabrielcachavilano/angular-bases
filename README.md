# Bases

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Apuntes

---

### Components

---

Usualmente es un archivo que está compuesto por
una clase controladora escrita en TypeScript, un
template HTML que puede estar separado y un archivo
de CSS opcional. También se puede juntar con los
archivos de pruebas.
**ng g c [component name]** : crea un component

### Directives - Directivas

---

Hay varios tipos de directivas, pero en sí, nos permiten
cambiar el comportamiento de elementos HTML o
componentes personalizados.

### Modulos

---

Son contenedores para realizar la cohesion de código
que tiene funcionamiento en común. Este
funcionamiento común puede ser un flujo de trabajo,
conjunto de capacidades o código dedicado a un
dominio de la aplicación.

**ng g m [module name]** : crea un modulo

---

¿Qué veremos en esta sección?
Una vez sentadas las bases de Angular en la sección anterior, vamos a seguir expandiéndolas aquí, con los siguientes temas:

Profundizar un poco más en los módulos
FormsModule
ngModel
@Inputs
@outputs
Servicios
Métodos en servicios
Depuraciones

Hay más temas en los videos, pero en forma general esto es lo principal por ahora, tengan presente que aunque todo esto es opcional, la mayor parte de aplicaciones de Angular usan en cierto punto cada uno de los temas que están en esta sección, por lo que hay que asegurarnos de comprender bien cada lección

cuando se descarga un proyecto angular hay que hacer un npm install antes del ng serve para que instale los paquetes ecesarios para que funcione

una page es un componente que agrupa componentes

---

### Decoradores de clase para componentes

---

**@Input**: Define una propiedad que puede ser enviada desde el padre hacia el componente hijo

```javascript
  // Propiedad de un componente
  @Input()
  characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];
```

Ejemplo:

```html
  <!-- se utiliza la propiedad del componente en la page(router)y esta establece que se use una variable/arreglo pero que cumpla con el formato o interface de la propiedad con el decorador @Input,
  se envia el arreglo del padre (page-component) al hijo (list-component) -->
  <app-dbz-list [characterList]="characters">
  </app-dbz-list>
```

**@Output**: Define una salida del componente que el componente padre puede suscribirse para escuchar
@Output() myEvent = new EventEmitter();

Ejemplo:

```html
  <my-cmp (myEvent)=“someExpression”>
```

LAS INTERFACES NO SE IMPORTAN EN EL MODULO

#### *ngfor

---

Si se necesita indicar o mostrar el indice se hace de la siguiente forma

```html
  <ul class="list-group">
    <li *ngFor="let item of characterList, let i = index" class="list-group-item">
      <span class="text-primary">{{ i + 1}}.</span>
      <span>{{ item.name }} - </span>
      <strong>power: </strong>
      <span>{{ item.power }}</span>
    </li>
  </ul>
```

Si quisiera agregar clases dependiendo del indice se hace de la siguiente forma utilizando la directiva **ngClass**

```html
  <ul class="list-group">
    <li *ngFor="let item of characterList,
     let i = index,
     let isFirst = first;
     let isLast = last;
     let isEven = even;
     let isOdd = odd;" class="list-group-item"
     [ngClass]="{
      'list-group-item-dark' : isEven,
      'list-group-item-primary' : isLast
     }">
     <!--
      last, first,even y odd son elementos del ngFor,
      y devuelven un booleano, es ultimo elemento, es primer elemento, es elemento par, es elemento impar
      -->
      <span class="text-primary">{{ i }}.</span>
      <span>{{ item.name }} - </span>
      <strong>power: </strong>
      <span>{{ item.power }}</span>
    </li>
  </ul>
```

### FormsModule y ngModel

---

Para utilizar el ngModel es necesario importar el FormsModule en el modulo donde se vaya a utilizar el formulario

#### ngSubmit

---

Se utiliza como evento para formulario, una vez que se envia con un boton submit llama a la funcion a la que hace referencia

```html
  <form class="row" action="" (ngSubmit)="emitCharacter()">
    ...
  </form>
```

Se usa EventEmitten, es un generico para recibir desde un hijo informacion

```html
  <!-- main page -->
  <app-dbz-add-character (onNewCharacter)="newCharacter($event)">
  </app-dbz-add-character>
```

```javascript
  // clase padre que recibe la info
  export class MainPageComponent {
    public characters: Character[] = [
      {
        name: 'Krillin',
        power: 1000
      }, {
        name: 'Goku',
        power: 9500
      }, {
        name: 'Vegeta',
        power: 7500
      }
    ];

    newCharacter(character: Character): void {
      // el metodo puede tener cualquier nombre
      console.log(character);
    }
  }
```

```javascript
  // clase hija
  export class AddCharacterComponent {
    @Output()
    onNewCharacter: EventEmitter<Character> = new EventEmitter();

    character: Character = {
      name: '',
      power: 0
    }

    emitCharacter(): void {
      console.log(this.character);
      if (this.character.name.length === 0) return;
      this.onNewCharacter.emit(this.character);
      this.character.name = '';
      this.character.power = 0;
    }
  }
```

* **NOTA**: para debuggear se puede usar **debugger;**

Este es un breve listado de los temas fundamentales:

Generar build de producción

Desplegarlo rápidamente

Netlify

GitHub Pages

npm Scripts para automatizar el proceso

Aquí aprenderemos como generar el build de producción de nuestra aplicación y la desplegaremos en la web.

El proceso de despliegue en otros servidores es virtualmente el mismo, tomar nuestra carpeta DIST (que contiene la aplicación con archivos HTML, CSS y JS) y desplegarla mediante FTP (preferiblemente sFTP) en el hosting deseado

ng build crea una carpeta de todo el proyecto minificado para poder hostearlo

npm run build funciona igual que el ng build pero este lo crea usando el angular cli basado en el package.json
