import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanesComponent } from './planes/planes.component';
import { LibroComponent } from './libro/libro.component';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';
import { ListaLibroComponent } from './lista-libro/lista-libro.component';
import { RegistroComponent } from './registro/registro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CatalogoCategoriaComponent } from './catalogo-categoria/catalogo-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanesComponent,
    LibroComponent,
    NuevoLibroComponent,
    ListaLibroComponent,
    RegistroComponent,
    CatalogoComponent,
    DetalleLibroComponent,
    CarritoComponent,
    LoginComponent,
    CatalogoCategoriaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
