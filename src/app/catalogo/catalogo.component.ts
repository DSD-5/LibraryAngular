import { Component, OnInit } from '@angular/core';
import {CatalogoServices} from '../services/catalogo.service';
import {Libro} from '../model/libro';
import {AuthenticationServices} from '../services/authentication.service';
import {CarritoServices} from '../services/carrito.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  libro: Libro[] = [];
  libroDetalle : any;
  constructor(
    private catalogoServices: CatalogoServices,
    private auth: CarritoServices
  ) { }

  ngOnInit() {

    this.catalogoServices.listarLibros(1).subscribe(result => {
      this.libro = result;
    });
    
    this.auth.verCarrito().subscribe(result => {
      // console.log(result);
    })
  }

}
