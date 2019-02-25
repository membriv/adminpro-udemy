import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Viene del custom.js para inicializar los plugins despues del login.
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  login(){
    console.log('Entrando en la App...');
    this.router.navigate(['/dashboard']);
  }

}
