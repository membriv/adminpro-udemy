import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() {
    // this.devolverObservabe().pipe(
    //   // Si hay error lo reintenta 2 veces
    //   retry(2)
    // )

    this.subscription = this.devolverObservabe()
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.error ('Error en el obs', error),
      () => console.log ('El observador terminó!')
    );
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  devolverObservabe(): Observable <any> {
    return new Observable((observer: Subscriber <any>) => {
      let contador = 0;
      const intervalo = setInterval (() => {
        contador += 1;
        // Imaginemos que el servicio devuelve un objeto
        const salida = {
          valor: contador
        };
        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // // Error en el segundo
        // if  (contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('Auxilio!');
        // }
      }, 1000);
    }).pipe(
      map(resp => resp.valor + 1),
      filter((valor, index) =>  {
        // console.log ('Filter', valor, index);
        if ((valor % 2) === 1){
          // impar
          return true;
        } else{
          // Par
          return false;
        }
      })
    );

  }
}
