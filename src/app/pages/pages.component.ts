import { Component, OnInit } from '@angular/core';

// Viene del custom.js para inicializar los plugins despues del login.
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
