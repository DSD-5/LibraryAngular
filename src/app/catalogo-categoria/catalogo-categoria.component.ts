import { Component, OnInit } from '@angular/core';
import {CatalogoServices} from '../services/catalogo.service';
import {Libro} from '../model/libro';
import {AuthenticationServices} from '../services/authentication.service';
import {CarritoServices} from '../services/carrito.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo-categoria',
  templateUrl: './catalogo-categoria.component.html',
  styleUrls: ['./catalogo-categoria.component.css']
})
export class CatalogoCategoriaComponent implements OnInit {

  idcategoria: any;
  categoria: string;
  libro: Libro[] = [];
  libroDetalle : any;
  constructor(
    private catalogoServices: CatalogoServices,
    private auth: CarritoServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idcategoria = this.route.snapshot.paramMap.get('id');
    this.categoria = this.route.snapshot.paramMap.get('categoria');
    this.catalogoServices.categoriaLibro(this.idcategoria).subscribe(response => {
      this.libro = response;
      //console.log(response);
    });
  }

}
