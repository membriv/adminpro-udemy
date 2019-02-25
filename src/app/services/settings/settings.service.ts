import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _DOCUMENT) {
    this.cargarAjustes();
   }

  guardarAjustes(){
    // Guardar en memoria local. json.stringfy convierte un json en string, ya que es lo que permite local storage
    // console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      // console.log('Cargando Ajustes del LocalStorage');
    } else {
      // console.log('Usando Ajustes por defecto.');
    }
    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema(tema: string){
    const url = `assets/css/colors/${tema}.css`;
    this._DOCUMENT.getElementById('tema').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}


interface Ajustes {
  temaUrl: string;
  tema: string;
}