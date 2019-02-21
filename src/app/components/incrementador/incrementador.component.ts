import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {
  
  // Referencia a un elemento html
  @ViewChild('txtProgress') txtProgress: ElementRef;

// El parametro del input sive para llamar a la propiedad desde la plantilla con otro nombre
// angular no recomienda esta practica, por eso te lo marca el tslint
// tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string;
  @Input() progreso: number;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.leyenda = 'Leyenda';
    console.log('Constructor Leyenda', this.leyenda);
    this.progreso = 50;
    console.log('Constructor Progreso ', this.progreso);
  }

  ngOnInit() {
    console.log('On Init Leyenda', this.leyenda);
    console.log('On Init Progreso ', this.progreso);
  }

  onChanges(newValue: number){

    // Validar el campo con vanilla java script para no poder escribir mas de 100
    // const elemHTML: any = document.getElementsByName('progreso') [0];
    if(newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  incrementarValor(valor: number) {
    console.log(this.progreso);
    if (this.progreso < 100) {
      this.progreso = this.progreso + valor;
    }
    this.cambioValor.emit(this.progreso);
    // Cambiar el foco
    this.txtProgress.nativeElement.focus();
  }

  decrementarValor(valor: number) {
    console.log(this.progreso);
    if (this.progreso > 0) {
      this.progreso = this.progreso - valor;
    }
    this.cambioValor.emit(this.progreso);
    // Cambiar el foco
    this.txtProgress.nativeElement.focus();
  }
}
