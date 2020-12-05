import { Component, OnInit } from '@angular/core';
import {CatalogoServices} from '../services/catalogo.service';
import {Libro} from '../model/libro';
import { ActivatedRoute, Router} from "@angular/router";
import { CarritoServices } from '../services/carrito.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {

  logueado: boolean;
  compraForm: FormGroup;
  idlibro: any;
  libro: Libro[] = [];
  titulo: string;
  descripcion: string;
  precioventa: number;
  preciorenta: number;
  stockventa: number;
  stockrenta: number;
  isLoading = false;
  libroDetalle : any;

  constructor(
    private catalogoServices: CatalogoServices,
    private router: Router,
    private CarritoService: CarritoServices,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  get f() { return this.compraForm.controls; }

  ngOnInit() {

    if(localStorage.getItem('token')) {
      this.logueado = true;
    }
    else {
      this.logueado = false;
    }


    this.idlibro = this.route.snapshot.paramMap.get('id');
    this.catalogoServices.listarLibros().subscribe(result => {
      this.libro = result;
      this.libro.forEach((item,i) => {
              if(this.libro[i].id == this.idlibro){
                this.titulo = item.title;
                this.descripcion = item.description;
                this.preciorenta = item.pricerental;
                this.precioventa = item.pricesale;
                this.stockrenta = item.stockrental;
                this.stockventa = item.stocksale;
                // localStorage.setItem('stock1', item.stocksale.toString());
                // console.log(this.stockventa)
                // console.log(this.titulo);
              }
            })
    });
    this.compraForm = this.formBuilder.group({
      cantidad: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });

  }


  // agregarLibro(idlibro: number){
  //   // console.log(idlibro);
  //   this.CarritoService.agregarProducto(this.idlibro, 1, 'V').subscribe(result => {
  //     localStorage.setItem('carritolleno', 'si');
  //     localStorage.setItem('idcarrito', result[0].shoppingid);
  //     window.location.href = 'http://tutiempolibro.cf/carrito';
  //     // this.router.navigate(['carrito']);
  //   })
  // }

  onSubmit(){
    this.isLoading = true;
    this.CarritoService.agregarProducto(this.idlibro, this.f.cantidad.value, this.f.tipo.value).subscribe(result => {
      localStorage.setItem('carritolleno', 'si');
      localStorage.setItem('idcarrito', result[0].shoppingid);
      // window.location.href = 'http://localhost:4200/carrito';
      this.isLoading = false;
      this.router.navigate(['carrito']);
    },
    error => {
      this.isLoading = false;
    });
  }

}
