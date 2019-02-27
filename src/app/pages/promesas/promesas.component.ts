import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})

// Las promesas sirven para hacer una tarea asíncrona
export class PromesasComponent implements OnInit {

  constructor() {

    console.log('Primer paso');
    this.contar3().then(
      mensaje => console.log('Terminó?', mensaje)
    ).catch(
      error => console.error('Error error en la promesa', error)
    );
    console.log('Segundo paso');
  }

  ngOnInit() {
  }

  contar3(): Promise <boolean> {
    return new Promise((resolve, reject) => {
      let contador: number = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          // reject('Simplemente un error');
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
