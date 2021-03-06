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
    private auth: AuthenticationServices,
  ) { }

  ngOnInit() {

    this.catalogoServices.listarLibros().subscribe(result => {
      this.libro = result;
    });

    // this.auth.planes().subscribe(result => {
    //   console.log(result);
    // })

  }

}
