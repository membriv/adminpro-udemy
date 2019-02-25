import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _AJUSTES: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    console.log(link);
    this.cambiarCheck(link);
    this._AJUSTES.aplicarTema(tema);
  }

  cambiarCheck( link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  // Al recargar la pagina
  colocarCheck(){
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this._AJUSTES.ajustes.tema;
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
