import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import {CatalogoCategoriaComponent} from './catalogo-categoria/catalogo-categoria.component';

const routes: Routes = [
  { path: 'carrito', component: CarritoComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'detalle/:id', component: DetalleLibroComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'categoria/:categoria/:id', component: CatalogoCategoriaComponent},
  { path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  }
];
const config: ExtraOptions = {
  useHash: false,
};

export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
