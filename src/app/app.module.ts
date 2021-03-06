import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Modulos
import { PagesModule } from './pages/pages.module';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { APP_ROUTES } from './app.routes';

// Temporal
import { FormsModule } from '@angular/forms';

//Servicios
import {ServiceModule} from "./services/service.module";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
